var rightHand = new Bar();
var leftHand = new Bar();
const CANDIDATES = [0.5, 1];

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  rightHand.generate();
  leftHand.generate();
  ellipseMode(CORNER);
  noStroke();
}

function draw() {
  background(200);
  drawNotes(rightHand.notes, windowHeight - 100);
  drawNotes(leftHand.notes, windowHeight - 200);
}

function mouseClicked() {
  rightHand.generate();
  leftHand.generate();
}

function drawNotes(notes, y) {
  let position = 0;
  notes.forEach((note, index) => {
    fill(note * 100);
    let previousNote = ((notes[index - 1] || 0) * windowWidth) / 8;
    let x = position + previousNote;
    position += previousNote;
    ellipse(x, y, 50);
  });
}

function Bar() {
  this.duration = 0;
  this.notes = [];
  this.push = function(note) {
    if (this.duration + note > 8) {
      return;
    }
    this.duration += note;
    this.notes.push(note);
  };
  this.generate = function() {
    this.duration = 0;
    this.notes = [];
    while (this.duration !== 8) {
      this.push(pickRandom(CANDIDATES));
    }
  };
}

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];
