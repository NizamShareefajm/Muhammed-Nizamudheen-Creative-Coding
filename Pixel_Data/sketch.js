let img;
let x, y;

function preload() {
  img = loadImage("imgg.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  
  // Display the image
  image(img, 0, 0, width, height);
  
  // Get color under the mouse
  x = mouseX;
  y = mouseY;
  let c = img.get(x, y);
  
  // Use the sampled color to create effects
  fill(c);
  ellipse(x, y, 100, 100);
  
  // Example: Draw a rectangle with the sampled color
  fill(c);
  rect(x - 50, y + 50, 100, 50);
}
