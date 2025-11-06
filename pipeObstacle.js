// draws pipe obstacle
export class PipeObstacle {
    x = 700;
    y = 250;
    height;
    width = 100
    canvas;
    pencil;
    speed = 10;
    gap = 200;

    //pipe parts
    topPipe
    bottomPipe

    constructor (canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
        
        this.height = canvas.height;
    }
        
    draw() {

        //top pipe
        this.pencil.fillStyle = 'green'; // set fill color
        this.pencil.fillRect(this.x, this.y - (this.height), this.width, this.height); // x, y, w, h
        
        //bottom pipe
        this.pencil.fillStyle = 'green'; // set fill color
        this.pencil.fillRect(this.x, this.y + this.gap, this.width, this.height); // x, y, w, h
    }

    move() {
        this.x -= this.speed;
        
        // pipe recycle
        if (this.x < -this.width) {
            this.x = this.canvas.width
            this.y = Math.random() * this.canvas.height 
        }
    }
}