export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    ySpeed = 1;
    maximumYSpeed = 20;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }
 
    draw() {
        //top pipe
        this.pencil.fillStyle = 'black'; // Set the fill color
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    flap() {
        console.log("Flapped!")
        this.ySpeed = -15;
    }

    gravity() {
        this.y += this.ySpeed
        this.ySpeed += 2;

        if(this.ySpeed > this.maximumYSpeed) {
            this.ySpeed = this.maximumYSpeed;
        }

    }

    isHitByPipe(pipeObstacle) {

        

        //this detects collisions for the top pipe
        let hitTopPipe = (
        this.x > pipeObstacle.topPipeTopLeft.x && 
        this.y > pipeObstacle.topPipeTopLeft.y && 
        this.x < pipeObstacle.topPipeBottomRight.x && 
        this.y < pipeObstacle.topPipeBottomRight.y
        
        );


        //use the logic above to detect for the bottom pipe here:
        let hitBottomPipe = (
            this.x > pipeObstacle.bottomPipeTopLeft.x && 
            this.y > pipeObstacle.bottomPipeTopLeft.y &&
            this.x < pipeObstacle.bottomPipeBottomRight.x &&
            this.y < pipeObstacle.bottomPipeBottomRight.y

        );

        return hitTopPipe || hitBottomPipe;
    }


}