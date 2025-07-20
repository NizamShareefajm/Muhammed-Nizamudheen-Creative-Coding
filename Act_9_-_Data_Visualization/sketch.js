let numbers = [];
const numBars = 20;
const minVal = 10;
const maxVal = 100;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  generateNumbers();
  sortNumbers();
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
}

function draw() {
  background(95, 10, 100);

  // Title
  fill(220, 80, 60);
  text("Sorted Bar Graph Visualization", width / 2, 30);

  let barWidth = width / numBars * 0.7; // narrow bars with space
  let spacing = (width / numBars) * 0.3;

  for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];
    let x = i * (barWidth + spacing) + spacing / 2;
    let barHeight = map(val, minVal, maxVal, 50, height - 100);
    let y = height - barHeight;

    let hue = map(val, minVal, maxVal, 160, 280);
    let sat = map(val, minVal, maxVal, 60, 90);
    fill(hue, sat, 90);

    // Main bar
    rect(x, y, barWidth, barHeight);

    // Shadow for 3D effect
    fill(hue, sat, 70);
    rect(x + barWidth * 0.75, y + barHeight * 0.1, barWidth * 0.25, barHeight * 0.9);
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    generateNumbers();
    sortNumbers();
  }
  if (key === 's' || key === 'S') {
    shuffle(numbers, true);
  }
}

function generateNumbers() {
  numbers = [];
  for (let i = 0; i < numBars; i++) {
    numbers.push(int(random(minVal, maxVal + 1)));
  }
}

function sortNumbers() {
  numbers.sort((a, b) => a - b);
}
