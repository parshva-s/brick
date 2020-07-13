import Paddle from "/src/paddle.js";
import InputHandler from "/src/input.js";
import Ball from "/src/ball.js";
import RedBricks from "/src/Redbrick.js";
import OrangeBricks from "/src/Orangebricks.js";
import YellowBricks from "/src/Yellowbricks.js";
import GreenBricks from "/src/Greenbricks.js";
import { buildLevel, L1, L2 } from "/src/levels.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4,
};

export default class Game {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;

    this.points = 0;
    this.lives = 3;
    this.bricks = [];
    this.levels = [L1, L2];
    this.currentLevel = 0;

    //initiates game
    this.gamestate = GAMESTATE.MENU;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    this.gameObjects = [];

    new InputHandler(this.paddle, this); //movement of paddles
  }

  start() {
    if (this.gamestate != GAMESTATE.MENU && this.gamestate != GAMESTATE.NEWLEVEL) return;

    this.gamestate = GAMESTATE.RUNNING;

    this.bricks = buildLevel(this, this.levels[this.currentLevel]); //builds bricks
    this.ball.reset();
    this.gameObjects = [this.ball, this.paddle];
  }

  update(deltaTime) {
    //paused game
    if (this.lives ==0) this.gamestate = GAMESTATE.GAMEOVER;
    if (this.gamestate == GAMESTATE.PAUSED || 
        this.gamestate == GAMESTATE.MENU ||
        this.gamestate == GAMESTATE.GAMEOVER)
      return;
    
    if (this.bricks.length == 0) {
      this.currentLevel++;
      this.gamestate = GAMESTATE.NEWLEVEL; 
      this.start();
    }

    //updates canvas
    [...this.gameObjects, ...this.bricks].forEach((brick) => brick.update(deltaTime));

    this.bricks = this.bricks.filter(
      (object) => !object.markedforDeletion
    );
    if(this.ball.position.y <= 180) {
      this.paddle.width = 110;
    }
  }
  draw(ctx) {
    //draws the stuff on canvas
    [...this.gameObjects, ...this.bricks].forEach((brick) => brick.draw(ctx));
    ctx.font = "30px Comic Sans";
    ctx.fillStyle = "Black";
    ctx.textAllign = "center";
    ctx.fillText("Points: " + this.points, 20, 30);
    ctx.fillText("Lives Remaining: "+ this.lives, 550,30);

    //paused
    if (this.gamestate == GAMESTATE.PAUSED) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAllign = "center";
      ctx.fillText("Paused", 350, 350);
    }

    //menu
    if (this.gamestate == GAMESTATE.MENU) {
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAllign = "center";
      ctx.fillText("Press Spacebar to Start", 225, 300);
    }

    //game over
    if(this.gamestate == GAMESTATE.GAMEOVER) {
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAllign = "center";
      ctx.fillText("Game Over", 325, 300);
    }
  }
  togglePause() {
    if (this.gamestate == GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
