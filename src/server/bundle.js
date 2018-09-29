var n = 0;
var c = 8;
var ratio = 137.5
var coefficient = 1
function invertCoefficient() {
    coefficient = n % 512  === 0 ? coefficient * -1 : coefficient * 1;
    if (n === 0) {
       ratio += 0.1       
    }
}

function setup() {
    frameRate(20)
    createCanvas(400, 400)
    angleMode(DEGREES)
    colorMode(RGB)
    background(0)
    noStroke()
}

function draw() {
    for (var i = 0; i <= 10; i++) {
        var a = n * ratio
        var r = c * sqrt(n)
        var x = r * cos(a) + width / 2
        var y = r * sin(a) + height / 2
        n+= coefficient
        invertCoefficient()
        var hue = coefficient < 0 ? 0 : a%255
        var saturation = coefficient < 0 ? 0 : r%255
        var lightness = coefficient < 0 ? 0 : r%255
        stroke(coefficient < 0 ? 0 : 1)
        fill(hue, saturation, lightness);
        ellipse(x, y, 12, 12)
    }
}
