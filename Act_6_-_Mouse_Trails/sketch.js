function setup() {
  createCanvas(500, 500);
  noStroke();
  drawBackground();
}

function drawBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(50, 50, 100), color(100, 100, 150), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  fill(0, 5); // faint overlay to create trail effect
  rect(0, 0, width, height);
}

function mouseDragged() {
  let count = int(random(5, 12));
  let radius = random(60, 120);

  blendMode(ADD); // glow effect by adding color intensity

  for (let i = 0; i < count; i++) {
    let alpha = random(80, 150);
    let col = color(random(200), random(100, 255), random(150, 255), alpha);
    fill(col);

    let offsetX = random(-20, 20);
    let offsetY = random(-20, 20);
    let scaleX = random(0.7, 1.3);
    let scaleY = random(0.7, 1.3);
    let angle = random(TWO_PI);

    push();
    translate(mouseX + offsetX, mouseY + offsetY);
    rotate(angle);
    scale(scaleX, scaleY);
    ellipse(0, 0, radius, radius * 0.6);
    pop();

    radius *= 0.75;
  }

  blendMode(BLEND); // Reset to default
}
