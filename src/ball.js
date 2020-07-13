import { collisiondetection } from "/src/collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.GAME_WIDTH = game.GAME_WIDTH;
    this.GAME_HEIGHT = game.GAME_HEIGHT;
    //image of ball
    this.image = document.getElementById("ball");
    this.size = 16;
    //position of ball
    this.position = {
      x: 150,
      y: 300,
    };
    //speed of ball
    this.speed = {
      x: 4,
      y: 4,
    };
    this.reset();
    this.game = game;
  }
  //resets position after live is lost
  reset() {
    this.position = {
      x: 150,
      y: 300,
    };
    this.speed = {
      x: 4,
      y: 4,
    };
  }
  //draws ball on canvas
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  //updates ball's position
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //bounces off of wall
    if (this.position.x > 800 - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (this.position.y > 600 - this.size) {
      this.game.lives--;
        this.reset();
        this.speed.y = -this.speed.y;
    }

    //bounces off object
    if (collisiondetection(this, this.game.paddle)) {
      this.speed.y +=0.16;
      this.speed.y = -this.speed.y;
    }
  }
}
