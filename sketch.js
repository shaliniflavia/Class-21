var fixedOval, movingOval, fixedcircle;



function setup() {
  createCanvas(400,400);

  fixedOval = new Sprite(200,200,50,100);
  movingOval = new Sprite(100,200,100,50);
  fixedcircle = new Sprite(350,100,50,50);
 


  
  
}

function draw() {
  background(0);  

  

  movingOval.xPosition = mouseX;
  movingOval.yPosition = mouseY;

  fixedOval.display();
  movingOval.display();
  fixedcircle.display();

  if(movingOval.isTouching(fixedcircle)){
    movingOval.shapeColor = "red";
    fixedcircle.shapeColor = "red";
  }
  else{
    movingOval.shapeColor = "green";
    fixedcircle.shapeColor = "green";

  }


}