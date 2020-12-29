
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world, boy;
var launchingForce = 100;

function preload() {

}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  stoneObj = new stone(235, 420, 30);

  mango1 = new mango(1100, 100, 30);
  mango2 = new mango(1170, 130, 30);



  groundObject = new ground(width / 2, 600, width, 20);
  launcherObject = new launcher(stoneObj.body, { x: 235, y: 420 })


  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

  Engine.run(engine);

}

function draw() {

  background(230);

  textSize(25);




  treeObj.display();
  stoneObj.display();
  mango1.display();

  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj, mango1);
  detectollision(stoneObj, mango2);

}



function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 })
    launcherObject.attach(stoneObj.body);
  }
}

function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if (distance <= lmango.r + lstone.r) {

    Matter.Body.setStatic(lmango.body, false);
  }

}