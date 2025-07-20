let img;

function preload() {
  img = loadImage("move.jpg"); // Ensure the image file exists
}

function setup() {
  createCanvas(600, 400);
  background(255, 180, 90); // Different warm background

  // New clipping setup with different text and size
  let gfx = createGraphics(width, height);
  gfx.fill(50, 20, 150); // A bold color that contrasts
  gfx.textSize(120); // Larger text size
  gfx.textStyle(BOLD);
  gfx.textAlign(LEFT, TOP); // Aligning top-left now
  gfx.text('WOW', 60, 100); // Different word & position

  img.resize(width, height); // Resize image to fit the canvas
  img.mask(gfx); // Apply the mask
  image(img, 0, 0); // Draw the masked image
}
