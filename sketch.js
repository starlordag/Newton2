
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1, Bob2, Bob3, Bob4, Bob5;
var sling, roof, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new ROOF(370,700,870,60);
	roof = new ROOF(370,300,420,40);
	
	//Create the Bodies Here.
	bob1 = new BOB(130,300,30, "red");
	bob2 = new BOB(160,300,30,"yellow");
	bob3 = new BOB(190,300,30,"pink");
	bob4 = new BOB(220,300,30, "blue");
	bob5 = new BOB(250,300,30, "green");
	sling = new Chain(bob1.body, roof.body, -bob1.r*2, 0);
	sling2 = new Chain(bob2.body, roof.body, -bob2.r*2, 30);
	sling3 = new Chain(bob3.body, roof.body, -bob3.r*2, 60);
	sling4 = new Chain(bob4.body, roof.body, -bob4.r*2, 90);
	sling5 = new Chain(bob5.body, roof.body, -bob5.r*2, 120);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  roof.display();
  bob1.display();
  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.setStatic(bob1.body,false);
		Matter.Body.setStatic(bob2.body,false);
		Matter.Body.setStatic(bob3.body,false);
		Matter.Body.setStatic(bob4.body,false);
		Matter.Body.setStatic(bob5.body,false);
		Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x-10,y:bob1.body.position.y+10},{x:10 ,y:-10});
	}
}

