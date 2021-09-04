var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');

var circleArray = [];

var maxRadius = 40;
var minRadius = 2;

for (let i = 0; i < 400; i++) {

  var radius = 30;
  var x = Math.random() * (innerWidth - 2 * radius) + radius;
  var y = Math.random() * (innerHeight - 2 * radius) + radius;
  var dx = (Math.random() * 1 + 0.5);
  var dy = (Math.random() * 1 + 0.5);

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();