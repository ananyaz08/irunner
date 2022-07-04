const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine, world, ball, ball1, ground, box;

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine=Engine.create();
  world=engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  box=Bodies.rectangle(250,200,30,30,ball_options);
  World.add(world,box);

  ball1=Bodies.circle(300,30,10,ball_options);
  World.add(world,ball1);
//create a ground
//add to world
ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(box.position.x,box.position.y,30,30);

  ellipse(ball1.position.x,ball1.position.y,10);
fill("white")
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 
fill("blue")
rect(ground.position.x,ground.position.y,400,20);

  
  
}

