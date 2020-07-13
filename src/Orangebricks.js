import { collisiondetection } from "/src/collisionDetection.js";

export default class OrangeBricks {
  constructor(game, position) {
    this.width = 50;
    this.height = 25;
    this.position = position;
    this.OrangePoints = 0;
    this.game = game;

    this.markedforDeletion = false;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (collisiondetection(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedforDeletion = true;
      this.OrangePoints += 5;
      this.game.points += this.OrangePoints;
    }
  }
}
