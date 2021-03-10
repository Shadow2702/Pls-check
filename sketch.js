const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World

var myworld,myengine
var box1,box2
var ground1
function setup() {
createCanvas(400,400);
 myengine=Engine.create()
 myworld=myengine.world
box1=new box(200,300,50,50)
box2=new box(240,100,50,100)
ground1=new ground(200,380,400,20)
}

function draw() {
background("black");  
Engine.update(myengine)
box1.display()
box2.display()
ground1.display()
}