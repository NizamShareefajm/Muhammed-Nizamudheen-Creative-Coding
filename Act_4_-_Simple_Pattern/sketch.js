let colors = ['#FFC0CB', '#FFFF66', '#DDA0DD', '#ADD8E6', '#98FB98', '#FFA500'];
let shapes = ['rect', 'ellipse', 'triangle'];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(1); // Change every second
  noStroke();
}

function draw() {
  background(240); // Softer background tone
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = i * 80 + 40;
      let y = j * 80 + 40;

      let randColor = colors[int(random(colors.length))];
      let randShape = shapes[int(random(shapes.length))];
      let size = random(40, 80);
      let rotation = random(-20, 20);
      let alpha = random(150, 255); // add transparency

      push();
      translate(x, y);
      rotate(rotation);
      fill(color(randColor + hex(int(alpha), 2))); // add transparency to color

      if (randShape === 'rect') {
        rectMode(CENTER);
        rect(0, 0, size, size);
      } else if (randShape === 'ellipse') {
        ellipse(0, 0, size, size);
      } else if (randShape === 'triangle') {
        triangle(
          0, -size / 2,
          -size / 2, size / 2,
          size / 2, size / 2
        );
      }

      pop();
    }
  }
}
