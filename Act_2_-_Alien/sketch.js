function setup() {
  createCanvas(500, 400);
  background(30, 10, 40); // deeper purple background
}

function draw() {
  // Body
  fill(255, 120, 80); // orange body
  noStroke();
  ellipse(250, 220, 230, 280); // body
  
  // Head
  fill(240, 80, 120); // reddish head
  ellipse(250, 100, 160, 140); // head
  
  // Eyes
  fill(255); // white eyes
  ellipse(215, 100, 35, 55); // left eye
  ellipse(285, 100, 35, 55); // right eye
  
  // Pupils
  fill(0);
  ellipse(215, 100, 15, 15); // left pupil
  ellipse(285, 100, 15, 15); // right pupil
  
  // Antennas
  stroke(240, 80, 120);
  strokeWeight(3);
  line(250, 40, 200, 70); // left antenna
  line(250, 40, 300, 70); // right antenna
  
  noStroke();
  fill(240, 80, 120);
  ellipse(200, 70, 25, 25); // left antenna tip
  ellipse(300, 70, 25, 25); // right antenna tip
  
  // Mouth
  fill(30);
  arc(250, 150, 70, 30, 0, PI); // smiling mouth
  
  // Teeth
  fill(255);
  rect(235, 145, 8, 8);
  rect(247, 145, 8, 8);
  rect(259, 145, 8, 8);
  
  // Body patterns
  fill(255, 255, 255, 100); // semi-transparent white
  ellipse(220, 240, 40, 40);
  ellipse(280, 240, 40, 40);
  ellipse(250, 290, 40, 40);
}
