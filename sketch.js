const Engine=Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stones
var dground,tree,treeimg
var boy,boyimg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

function preload(){
	treeimg=loadImage("tree.png")
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;

	dground=new Ground()
	stones=new Stone(100,460,30)
	mango1=new Mango(600,290,30)
	mango2=new Mango(855,325,30)
	mango3=new Mango(670,260,30)
	mango4=new Mango(730,200,30)
	mango5=new Mango(710,320,30)
	mango6=new Mango(780,250,30)
	mango7=new Mango(825,170,30)
	mango8=new Mango(880,260,30)
    mango9=new Mango(940,220,30)
	mango10=new Mango(980,385,30)

    attach=new Throw(stones.body,{x:100,y:465})
	
    tree=createSprite(610,350)
	tree.addImage(treeimg)
	tree.scale=0.5

	boy=createSprite(160,530)
	boy.addImage(boyimg)
	boy.scale=0.1

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
     
  fill("black")
  textSize(18)

  detectCollision(stones,mango1)
  detectCollision(stones,mango2)
  detectCollision(stones,mango3)
  detectCollision(stones,mango4)
  detectCollision(stones,mango5)
  detectCollision(stones,mango6)
  detectCollision(stones,mango7)
  detectCollision(stones,mango8)
  detectCollision(stones,mango9)
  detectCollision(stones,mango10)
  
  drawSprites();
 
  stones.display()
  dground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
    mango9.display()
	mango10.display()
  attach.display()
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	attach.fly()
}


function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stonesBodyPosition=lstone.body.position

 var distance=dist(stonesBodyPosition.x,stonesBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if (distance<=lmango.diametre+lstone.diametre){
	 Matter.Body.setStatic(lmango.body,false)
 }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465})
		attach.Launch(stones.body)
	}
}