
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []

function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

  for(var j = 75; j<width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 75; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

	//Create the Bodies Here.
	ground = new Ground(340,690,680,10)
    c1 = new Ground(360, 700, 710, 10)
    c2 = new Ground(1, 350, 10, 700)
    c3 = new Ground(600, 350, 10, 700)
    d1 = new Divisions(60, 610, 10, 300)
	  d2 = new Divisions(130, 610, 10, 300)
    d3 = new Divisions(200, 610, 10, 300)
    d4 = new Divisions(260, 610, 10, 300)
    d5 = new Divisions(320, 610, 10, 300)
    d6 = new Divisions(380, 610, 10, 300)
    d7 = new Divisions(440, 610, 10, 300)
    d8 = new Divisions(500, 610, 10, 300)
    d9 = new Divisions(560, 610, 10, 300)
   
    }


function draw() {
  rectMode(CENTER);
  background("lightyellow");
  fill("white")
  Engine.update(engine)
  ground.display()
  fill("brown")
  c1.display()
  c2.display()
  c3.display()
  d1.display()
  d2.display()
  d3.display()
  d4.display()
  d5.display()
  d6.display()
  d7.display()
  d8.display()
  d9.display()
  for(var i = 0; i<plinkos.length; i++) {
    plinkos[i].display()
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(100, 700), 10, 10))
  }

  for(var j = 0; j<particles.length; j++) {
    particles[j].display()
  }
  drawSprites();
 
}


  




