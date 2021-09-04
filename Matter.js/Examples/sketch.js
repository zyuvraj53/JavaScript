var Engine = Matter.Engine,
  // Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

var world;
var box1;
var boxes = [];

var ground;

function setup() {
  
  createCanvas(innerWidth, innerHeight);
  var engine = Engine.create();
  world = engine.world;
  Runner.run(engine);

  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(430,height-30,width, 10, groundOptions);
  Composite.add(world, ground);
}

function mouseDragged(){
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);

 for(let i = 0; i < boxes.length; i++){
   boxes[i].show();
 }

 rectMode(CENTER);
 fill(170);
 //  noStroke();
 rect(ground.position.x, ground.position.y, width, 10);
  // box1.show();
}
