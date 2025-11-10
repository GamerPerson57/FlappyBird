import { PipeObstacle } from "./pipeObstacle.js";
import { Bird } from "./bird.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

// bird sprite
let birb = document.getElementById("birb");

// pipe sprites
let topPipe = document.getElementById("top_pipe")
let bottomPipe = document.getElementById("top_pipe")


let flappyBird;
let risingScore;
let startingScore = 0;

let testPipe;
let bird;


function gameStart() {
    startingScore = 0;
    testPipe = new PipeObstacle(canvas, pencil);
    bird = new Bird(canvas, pencil);
    flappyBird = setInterval(gameLoop, 50);
    risingScore = setInterval(raiseScore, 1000);
    document.getElementById("restartButton").style.display = "none";
}

function gameLoop() {
    
    //erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

   
    testPipe.move();
    testPipe.draw();

    bird.gravity();
    bird.draw();

    let wasHit = bird.isHitByPipe(testPipe);
    if(wasHit) {
        console.log("you're dead, comrade!");
        clearInterval(flappyBird);
        clearInterval(risingScore);
        document.getElementById("restartButton").style.display = "inline";
    }
    
}

//score goes up every second
function raiseScore() {
    startingScore += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "SCORE:" + startingScore;
}

function detectClick() {
    bird.flap();
}

function detectKey() {
    bird.flap();

}

canvas.addEventListener("click", detectClick);
document.addEventListener("keypress", detectKey)
document.getElementById("restartButton").addEventListener("click", gameStart);

gameStart();
