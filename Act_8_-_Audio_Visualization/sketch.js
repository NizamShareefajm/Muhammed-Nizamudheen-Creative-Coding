let mic;
let shapes = ['circle', 'square', 'triangle'];
let colors = [
  "#A3D2CA", // pastel teal
  "#F6BD60", // pastel orange
  "#F7EDF0", // pastel pink
  "#84A59D", // muted green
  "#F28482"  // soft coral
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  mic = new p5.AudioIn();
  mic.start();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  // Semi-transparent background for fading effect
  fill(120, 15);
  rect(0, 0, width, height);

  let micLevel = mic.getLevel() * height * 2.5;
  let size = constrain(micLevel, 15, 250);
  let shapeType = random(shapes);
  let col = random(colors);
  fill(col);

  push();
  // Add some small random jitter so shapes don't always stack perfectly
  translate(mouseX + random(-10, 10), mouseY + random(-10, 10));
  rotate(random(TWO_PI));

  if (shapeType === 'circle') {
    ellipse(0, 0, size, size);
  } else if (shapeType === 'square') {
    rect(0, 0, size, size);
  } else if (shapeType === 'triangle') {
    triangle(
      -size / 2, size / 2,
      size / 2, size / 2,
      0, -size / 2
    );
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(120);
}
