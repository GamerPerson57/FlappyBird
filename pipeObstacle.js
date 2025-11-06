// draws pipe obstacle
export class PipeObstacle {
    x = 500;
    y = 250;
    height = 500
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
        }
    }
}