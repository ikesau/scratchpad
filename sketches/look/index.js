var center,
  mouse,
  eyes = [],
  fillColour = [0, 0, 0],
  scleraColour = [255, 255, 255];

function setup() {
  const halfHeight = windowHeight / 2;
  const halfWidth = windowWidth / 2;
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  angleMode(DEGREES);
  noStroke();
  rectMode(CENTER);
  center = createVector(halfWidth, halfHeight);
  mouse = createVector(mouseX, mouseY);
  for (let i = 1; i < (windowWidth - 25) / 50; i++) {
    for (let j = 1; j < windowHeight / 50; j++) {
      eyes.push(new Eye(i * 50, j * 50, 25));
    }
  }
}

function draw() {
  mouse = createVector(mouseX, mouseY);
  background(...fillColour);
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].draw();
  }
}

class Eye {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.diff = p5.Vector.sub(mouse, this.pos);
    this.size = size;
    this.radius = this.size / 2;
    this.offset = size / 4;
  }
  sclera() {
    fill(...scleraColour);
    arc(
      this.pos.x,
      this.pos.y - this.offset,
      this.size,
      this.size,
      30,
      150,
      CHORD
    );
    arc(
      this.pos.x,
      this.pos.y + this.offset,
      this.size,
      this.size,
      210,
      330,
      CHORD
    );
  }
  pupil() {
    this.diff = p5.Vector.sub(mouse, this.pos);
    const mag = this.diff.mag();
    const distance = constrain(mag, 0, this.radius);
    this.diff.normalize();
    this.diff.mult((distance / this.radius) * (this.size / PI));
    translate(this.pos.x, this.pos.y);
    fill(...fillColour);
    ellipse(this.diff.x, this.diff.y, this.size / (TWO_PI / 3));
  }
  draw() {
    push();
    this.sclera();
    this.pupil();
    pop();
  }
}
