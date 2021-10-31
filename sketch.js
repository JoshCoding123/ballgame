const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var divbox=[];










function setup() {
 
createCanvas(480,800);
engine = Engine.create();
world = engine.world;
  ground1=new ground(240,775,480,20)
  //box1=new box(240,600,10,330)
  circle1=new circle(240,250,10)

for (var k=0; k<=480; k=k+80){
  box1=new box(k,600,10,330)
  divbox.push(box1)
}



  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine)
   ground1.display()
   for (i1=0;i1<=divbox.length;i1=i1+1){
     divbox[i1].display()
   }
   box1.display()
   circle1.display()
  drawSprites();
}