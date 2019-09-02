var canvas_width = window.innerWidth;
var canvas_height = 5;
var line_width = 100;

function setup() {
  createCanvas(canvas_width, canvas_height);
  noStroke();
}

var posX = 1;
var toRight = true;
var travelingSpeed = 10;

function windowResized() {
    canvas_width = window.innerWidth
    resizeCanvas(canvas_width, canvas_height); 
}

function draw() {
  background(220);
  if (toRight) {
    posX += travelingSpeed;
  } else {
    posX -= travelingSpeed;
  }

  if (posX > canvas_width - line_width) {
    toRight = false;
  }
  if (posX < 0) {
    toRight = true;
  }

  fill(200, 0, 0);
  rect(posX, 0, line_width, canvas_height);
}