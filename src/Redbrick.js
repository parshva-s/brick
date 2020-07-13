import { collisiondetection } from "./collisionDetection.js";

export default class RedBricks {
  constructor(game, position) {
    this.width = 50;
    this.height = 25;
    this.position = position;
    this.RedPoints = 0;
    this.game = game;

    this.markedforDeletion = false;
  }
  update() {
    if (collisiondetection(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedforDeletion = true;
      this.RedPoints += 7;
      this.game.points += this.RedPoints;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "rgba(100,0,0)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
