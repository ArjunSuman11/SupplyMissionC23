var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package_Options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package_Options={restitution:1};
	Packageoptions={setStatic: true};
	packageSprite=createSprite(width/2, 80, 10,10,package_Options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//creating the boxes
	box1= new Box(460, 610, 20, 100);
	box2= new Box(240,610, 20, 100);
	box3= new Box(350,650, 200, 20 );
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background(0);
Engine.update(engine);
packageSprite.display();
  box1.display();
  box2.display();
  box3.display();
rectMode(CENTER);

  
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
     

    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}
