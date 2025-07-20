let font;
let points = [];
let colors = [];

function preload() {
  font = loadFont("BlackOpsOne-Regular.ttf");
}

function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();

  points = font.textToPoints('BATH SPA', 100, 300, 100, {
    sampleFactor: 0.3,
  });

  colors = points.map(() => color(random(255), random(255), random(255), 180));
}

function draw() {
  fill(255, 20); // Transparent background for trailing effect
  rect(0, 0, width, height); // Instead of background(255)

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let c = colors[i];

    fill(c);

    // Create wavy movement
    let offsetX = sin(frameCount * 0.05 + i) * 2;
    let offsetY = cos(frameCount * 0.05 + i) * 2;

    // Pulsing size effect
    let size = 5 + sin(frameCount * 0.1 + i) * 3;

    ellipse(p.x + offsetX, p.y + offsetY, size, size);
  }
}
