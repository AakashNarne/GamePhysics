const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world , engine;
var ball;

function setup() {
  createCanvas(400,400);
//create the engine
engine = Engine.create()
//Add world to the engine
world = engine.world

  
var ball_options = {
restitution: 1,
frictionAir:0.01
}
   
var ground_options ={
isStatic: true
};
  
  
//create a ground
ground = Bodies.rectangle(200, 380, 500, 10, ground_options)
//add to world

World.add(world, ground)

ball = Bodies.circle(100,10,20,ball_options);
World.add(world,ball);
  
  
  

rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() 
{
background("black");
Engine.update(engine);
  
  
ellipse(ball.position.x,ball.position.y,20);
//write a rectangle function to display ground.
 rect(ground.position.x, ground.position.y, 500, 10)


  
  
}

