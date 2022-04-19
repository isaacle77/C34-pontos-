var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;
var pontos = [];
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = Bodies.rectangle(200,height,width,10,{isStatic : true});
  World.add(world,ground);
}
function mousePressed() {
  pontos.push(new Ponto(mouseX,mouseY,20,20));
}
function draw() {
  background ("black");
  for (var i = 0; i < pontos.length; i++) {
   pontos[i].show();
  }
}

