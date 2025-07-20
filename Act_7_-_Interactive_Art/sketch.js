let shapeTypes = ['circle', 'square', 'triangle'];
let lastX, lastY;

function setup() {
  createCanvas(600, 600);
  background(30);
  noStroke();
  lastX = mouseX;
  lastY = mouseY;
}

function draw() {
  // Soft fade to create motion trails
  fill(30, 15);
  rect(0, 0, width, height);

  // Calculate how fast the mouse is moving
  let speed = dist(mouseX, mouseY, lastX, lastY);
  lastX = mouseX;
  lastY = mouseY;

  if (mouseIsPressed) {
    let shape = random(shapeTypes);
    let baseSize = map(speed, 0, 50, 15, 110);
    let pulse = sin(frameCount * 0.2) * 10; // pulsating effect

    fill(random(150, 255), random(50, 200), random(150, 255), 160);

    push();
    translate(mouseX, mouseY);
    rotate(random(TWO_PI));
    
    let finalSize = baseSize + pulse;

    if (shape === 'circle') {
      ellipse(0, 0, finalSize, finalSize);
    } else if (shape === 'square') {
      rectMode(CENTER);
      rect(0, 0, finalSize, finalSize);
    } else if (shape === 'triangle') {
      triangle(-finalSize / 2, finalSize / 2, finalSize / 2, finalSize / 2, 0, -finalSize / 2);
    }
    pop();
  }
}

function keyPressed() {
  if (key.toLowerCase() === 'c') {
    background(30); // Clear the canvas with dark background
  }
}
