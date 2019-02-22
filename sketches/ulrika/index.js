var mouse;
var frameCount = 0;
var whiteFill;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Times New Roman");
  textAlign(CENTER);
  frameRate(30);
}

function draw() {
  mouse = createVector(mouseX, mouseY);
  center = createVector(windowWidth / 2, windowHeight / 2);

  background(0);
  stroke(255);
  noStroke();
  textSize(100);
  if (frameCount % 3 === 0) {
    whiteFill = !whiteFill;
  }
  var textFill = whiteFill ? [255, 255, 255] : [0, 0, 0];

  fill(...textFill);
  text("ulrika spacek", center.x, center.y);
  stroke(255, 255, 255);
  strokeWeight(8);
  for (let index = 1; index <= 50; index++) {
    var offset = index * 10;
    var theta = mouseY / windowHeight;
    line(
      0,
      (frameCount * index) % windowHeight,
      windowWidth,
      (frameCount * index) % windowHeight
    );
    line(
      (frameCount * index) % windowWidth,
      0,
      (frameCount * index) % windowWidth,
      windowHeight
    );
  }

  frameCount++;
}
