//Uppercase p for the class name, lowercase for file name.
//This class draws the pipe obstacle on the screen.
export class PipeObstacle {

    x = 300;
    y = 100;
    height; //height will be dynamic
    width = 150;
    canvas;
    pencil;
    speed = 10;
    gap = 150;

    //pipe parts
    topPipeTopLeft;
    topPipeBottomRight;
    bottomPipeTopLeft;
    bottomPipeBottomRight;

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;

        this.topPipe = new Image()
        this.topPipe.src = "./sprites/top_pipe.png";
        
        this.bottomPipe = new Image()
        this.bottomPipe.src = "./sprites/bottom_pipe.png";

        this.height = canvas.height;
    }

    draw() {

        this.topPipeTopLeft = { 
            x : this.x,
            y : this.y - this.height
        }

        this.topPipeBottomRight = { 
            x : this.x + this.width,
            y : this.y - this.height + this.height
        }

        this.bottomPipeTopLeft = {
            x : this.x,
            y : this.y + this.gap
        }

        this.bottomPipeBottomRight = {
            x : this.x + this.width,
            y : this.y + this.gap + this.height
        }


        //top pipe

        this.pencil.drawImage(
            this.topPipe,
            this.x, 
            this.y - this.height, 
            this.width, 
            this.height
        ); // x, y, w, h



        //bottom pipe

        this.pencil.drawImage(
            this.bottomPipe,
            this.x, 
            this.y + this.gap, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    move() {
        this.x -= this.speed;

        //check if we need to recycle
        if(this.x < -this.width) {
            this.x = this.canvas.width;

            //fixed pipes to stay in canvas
            let maxY = this.canvas.height - this.gap;
            this.y = Math.random() * maxY;
        }



    }



}