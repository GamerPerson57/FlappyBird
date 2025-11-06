import { PipeObstacle } from "./pipeObstacle.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil


function gameLoop() {
    //erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

    testPipe.move();
    testPipe.draw();
}

setInterval(gameLoop, 50);

let score = 0;

//score goes up every second
function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "SCORE:" + score;
}
setInterval(raiseScore, 1000);

function detectClick() {
    console.log("CLicked!")
}

canvas.addEventListener("click", detectClick);

let testPipe = new PipeObstacle(canvas, pencil);
testPipe.draw();
