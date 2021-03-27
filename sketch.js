const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var boy;
var mango;
var stone;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(100,650,1400,10);
	tree = new Tree(700,650,300,300);
	boy = new Boy(700,650,100,100)
	mango = new Mango(100,100,50,30);
	stone = new Stone(700,650,50,30);
	chain = new SlingShot(stone.body,{x:160,y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  boy.display();
  mango.display();
  stone.display();
  chain.display();
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
	}
	
	function mouseReleased(){
	chain.fly();        
	}
