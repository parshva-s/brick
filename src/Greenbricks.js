import { collisiondetection } from "/src/collisionDetection.js";

export default class GreenBricks {
  constructor(game, position) {
    this.width = 50;
    this.height = 25;
    this.position = position;
    this.GreenPoints = 0;
    this.game = game;

    this.markedforDeletion = false;
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (collisiondetection(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedforDeletion = true;
      this.GreenPoints += 1;
      this.game.points += this.GreenPoints;
    }
  }
}
