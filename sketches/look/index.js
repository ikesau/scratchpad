function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  fill(255);
  ellipse(windowWidth / 2, windowHeight / 2, 200);
  fill(100, 100, 50);
  const yc = windowHeight / 2;
  const xc = windowWidth / 2;
  const dy = yc - 0.2 * (yc - mouseY);
  const dx = xc - 0.2 * (xc - mouseX);
  const distanceX = mouseX - xc;
  const distanceY = -1 * (mouseY - yc);
  const theta = atan(distanceY / distanceX);
  console.log("x", distanceX);
  // console.log("y", distanceY);
  // console.log("theta: ", theta);
  const cVector = {
    y: -sin(theta) * 100,
    x: cos(theta) * 100
  };
    console.log('vector x', cVector.x)
  rect(cVector.x + xc, cVector.y + yc, 50, 50);
}
