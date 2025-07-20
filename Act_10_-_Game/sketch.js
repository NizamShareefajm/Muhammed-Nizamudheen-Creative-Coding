let shotX = 300;
let shotY = 600;
let shotSpeed = 0;
let targetX = 20;
let targetY = 300;
let targetSpeed = 3;
let targetDirection = 1; // 1 = right, -1 = left
let score = 0;
let canShoot = true;

function setup() {
  createCanvas(600, 700);
  textAlign(CENTER, CENTER);
  textSize(18);
  fill(50);
}

function draw() {
  background(200, 230, 250); // Light blue background

  // Ground
  fill(100, 60, 20);
  rect(0, 600, width, 100);

  // Target base
  fill(80, 40, 0);
  rect(450, 490, 80, 60);
  rect(485, 550, 10, 90);

  // Score display
  fill(0);
  textSize(20);
  text("SCORE", 520, 515);
  textSize(32);
  text(score, 520, 545);

  // Instruction text
  textSize(16);
  text("Press SPACE to shoot", width / 2, 50);

  // Shot (rectangle)
  fill(255, 50, 50);
  rect(shotX - 10, shotY - 10, 20, 20);

  // Target (concentric circles with new colors)
  fill(0, 150, 150);
  ellipse(targetX, targetY, 70, 70);
  fill(0, 200, 200);
  ellipse(targetX, targetY, 55, 55);
  fill(0, 150, 150);
  ellipse(targetX, targetY, 35, 35);
  fill(0, 200, 200);
  ellipse(targetX, targetY, 25, 25);
  fill(0, 150, 150);
  ellipse(targetX, targetY, 10, 10);

  // Move target back and forth
  targetX += targetSpeed * targetDirection;
  if (targetX > width - 20 || targetX < 20) {
    targetDirection *= -1;
  }

  // Move shot upwards
  shotY += shotSpeed;

  // Reset shot if it goes off screen
  if (shotY < 250) {
    shotSpeed = 0;
    shotY = 600;
    canShoot = true;
  }

  // Check collision
  if (dist(shotX, shotY, targetX, targetY) < 40) {
    score++;
    shotSpeed = 0;
    shotY = 600;
    canShoot = true;
    targetX = 20;
    targetDirection = 1;
  }
}

function keyPressed() {
  if (key === ' ' && canShoot) { // spacebar to shoot, only if ready
    shotSpeed = -6;
    shotX = mouseX; // shot comes from mouse horizontal position
    canShoot = false;
  }
}
