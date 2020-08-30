
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbinpart1,dustbinpart2,dustbinpart3;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,200,50);
ground = createSprite(400,695,800,10,);
dustbinpart1 = new bin(750,323,60,10);
dustbinpart2 = new bin(780,300,10,60);
dustbinpart3 = new bin(720,300,10,60);

  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
 
Engine.update(engine);


keyPressed();

dustbinpart1.display();
dustbinpart2.display();
dustbinpart3.display();
paper.display();
  drawSprites();
 
}


function keyPressed() {

	if(keyCode === UP_ARROW){
	
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	
	
	
	}

}