var myCircles = [];
var theGround;
var drops = 0;
var rainColor = 0.05;

function setup() {
  theGround = new Ground();
  createCanvas(1000, 700);
  for (var i = 0; i < 400; i++) {
    myCircles[i] = new Circle();
  }
}

function draw() {
  background(98, 169, 195);
  theGround.display();
  for (var i = 0; i < 400; i++) {
    myCircles[i].update();
    myCircles[i].display();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(-height);
    this.color = (98, 121, 195);
    this.speed = 1 + Math.random() * 2;
  }
  update() {
    this.y = this.y + this.speed;
    this.speed = this.speed + 0.001;
    this.y++;

    if (this.y > 500) {
      this.y = random(-height);
      drops += 1;

      if (drops == 10) {
        drops = 0;
        rainColor = rainColor + 1;
      }
    }
  }
  display() {
    fill(this.color);
    circle(this.x, this.y, random(), this.color);
  }
}
class Ground {
  constructor() {
    this.x = 0;
    this.y = 500;
    this.width = 1000;
    this.height = 700;
  }

  display() {
    fill(0, 100, rainColor);
    rect(this.x, this.y, this.width, this.height);
  }
}
