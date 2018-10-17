const height = 400;
const width = 600;
const halfHeight = height / 2;
const halfWidth = width / 2;
const radius = 100;
function setup() {
  createCanvas(width, height);
  colorMode(HSB);
  angleMode(DEGREES);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  const center = createVector(halfWidth, halfHeight);
  const mouse = createVector(mouseX, mouseY);

  fill(0, 0, 100);
  arc(center.x, center.y - 100, 400, 400, 30, 150, CHORD);
  arc(center.x, center.y + 100, 400, 400, 210, 330, CHORD);

  fill(255);
  ellipse(center.x, center.y, 2 * radius);

  const diff = p5.Vector.sub(mouse, center);
  const mag = diff.mag();
  const distance = constrain(mag, 0, 150);
  diff.normalize();
  diff.mult((distance / 150) * (radius - 10));
  translate(halfWidth, halfHeight);

  fill(175, 70, 0);
  ellipse(diff.x, diff.y, 100);
}
