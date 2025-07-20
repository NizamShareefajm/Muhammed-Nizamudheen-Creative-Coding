function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 220, 250); // light sky-blue background
  
  // car shadow
  noStroke();
  fill(50, 50, 50, 80);
  ellipse(200, 265, 280, 30);
  
  // body of the car 
  fill(255, 100, 100); // red-ish body
  rect(60, 210, 280, 45, 10); // main body with rounded edges
  rect(110, 170, 180, 45, 10); // upper front part
  
  // wheels
  fill(30);
  ellipse(110, 255, 45, 45); // front wheel
  ellipse(290, 255, 45, 45); // back wheel
  fill(100);
  ellipse(110, 255, 20, 20); // front hubcap
  ellipse(290, 255, 20, 20); // back hubcap

  // roof
  fill(255, 100, 100);
  rect(120, 130, 160, 40, 8); // smaller roof
  
  // windows
  fill(220);
  rect(130, 138, 60, 25, 5); // left window
  rect(210, 138, 60, 25, 5); // right window
  
  // headlights
  fill(255, 255, 150); // soft yellow
  ellipse(60, 225, 15, 15); // left headlight
  ellipse(340, 225, 15, 15); // right headlight
  
  // taillights
  fill(255, 80, 80); // red
  rect(75, 245, 10, 10); // left taillight
  rect(315, 245, 10, 10); // right taillight

  // simple road line
  stroke(255);
  strokeWeight(3);
  line(0, 275, width, 275);
}
