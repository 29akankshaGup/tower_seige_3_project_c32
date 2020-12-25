const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var ground1;
var engine,world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polyImg,polygon;

var slingshot;
var score=0;
var backgroundImg;

function preload(){
  getBackgroundImage();
  polyImg=loadImage("images/pentagon.jpg");
}


function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,300,180,10);

  //to craete boxes
  box1=new Box(500,275,"lightblue");
  box2=new Box(480,275,"lightblue");
  box3=new Box(460,275,"lightblue");
  box4=new Box(440,275,"lightblue");
  box5=new Box(520,275,"lightblue");
  box6=new Box(540,275,"lightblue");
  box7=new Box(560,275,"lightblue");

  box8=new Box(500,235,"lightpink");
  box9=new Box(480,235,"lightpink");
  box10=new Box(460,235,"lightpink");
  box11=new Box(520,235,"lightpink");
  box12=new Box(540,235,"lightpink");

  box13=new Box(500,195,"lightorange");
  box14=new Box(480,195,"lightorange");
  box15=new Box(520,195,"lightorange");

  box16=new Box(500,155,"grey");

  //to create polygon
  var option1={isStatic:false,density:0.2,restitution:0.4};
  polygon=Bodies.polygon(150,235,5,20,option1);
  World.add(world,polygon);

  //to create slingshot
  slingshot=new SlingShot(polygon,{x:150,y:180});
  Engine.run(engine);
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);  
  text("SCORE:"+score,100,50);
  Engine.update(engine);

  ground.display();
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  //to display polygon
  imageMode(CENTER);
  push();
  translate(polygon.position.x,polygon.position.y);
  rotate(polygon.angle);
  image(polyImg,0,0,40,40);
  pop();

  //to display slingshot
  slingshot.display();

  }

  function mouseReleased(){
    slingshot.fly();
  }

  function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }

  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(polygon);
    }
  }

  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "images/light.jpg";
    } else {
      bg = "images/dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
   // console.log(backgroundImg);
 }