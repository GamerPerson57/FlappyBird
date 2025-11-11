export class Bird {
    
    x = 75;
    y = 75;
    width = 75;
    height = 75;
    canvas;
    pencil;

    ySpeed = 1;
    maximumYSpeed = 20;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.sprite = new Image()
        this.sprite.src = "./sprites/birb.png";
    }
 
    draw() {
        //top pipe
        this.pencil.drawImage(
            this.sprite,
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
        let isFarEnoughRightTop = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnoughTop = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughLeftTop = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnoughTop = this.y < pipeObstacle.topPipeBottomRight.y;

        let hitTopPipe = isFarEnoughRightTop && isLowEnoughTop && isFarEnoughLeftTop && isHighEnoughTop;
        
        //use the logic above to detect for the bottom pipe here:
        let isFarEnoughRightBottom = this.x > pipeObstacle.bottomPipeTopLeft.x;
        let isLowEnoughBottom = this.y > pipeObstacle.bottomPipeTopLeft.y;
        let isFarEnoughLeftBottom = this.x < pipeObstacle.bottomPipeBottomRight.x;
        let isHighEnoughBottom = this.y < pipeObstacle.bottomPipeBottomRight.y;

        let hitBottomPipe = isFarEnoughRightBottom && isLowEnoughBottom && isFarEnoughLeftBottom && isHighEnoughBottom;

        return hitTopPipe || hitBottomPipe
     }

     offScreen() {
        if (this.y + this.height < 0 || this.y > this.canvas.height) {
            console.log("Out of bounds!")
            return true
        }
        return false
     }


}