function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 224);
  stroke(0);
  noFill();
  circle(width / 2, height / 2, 200);
  arc(width / 2, height / 2, 120, 120, 0, PI, CHORD);
  fill(0);
  square(width / 2 - 40, height / 2 - 40, 20);
  square(width / 2 + 20, height / 2 - 40, 20);
}
