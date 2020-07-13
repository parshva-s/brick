export default class Paddle {
    constructor(game) {
        this.GAME_WIDTH = game.GAME_WIDTH;
        this.GAME_HEIGHT = game.GAME_HEIGHT;
        //paddle dimensions
        this.width = 150;
        this.height = 30;
        //paddle position
        this.position = {
            x: game.GAME_WIDTH/2- this.width/2,
            y: game.GAME_HEIGHT-this.height - 10
            }
        //speeds
        this.maxSpeed = 10; 
        this.Speed = 0;
        //interact between different classes
        this.game = game;

    }
    //left
    moveLeft() {
        this.Speed = -this.maxSpeed;
    }  
    //right
    moveRight() {
        this.Speed = this.maxSpeed;
    }
    //stops when not pressing key
    stop() {
        this.Speed = 0;
    }
    //draws the paddle
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    //updates position of paddle
    update(deltaTime) {
        this.position.x += this.Speed;
        
        //doesn't go past wall
        if (this.position.x <0) this.position.x = 0;
        if (this.position.x + this.width >800)this.position.x = 800-this.width;
    }
}