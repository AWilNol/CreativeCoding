
var characterX = 200;
var characterY = 200;

var headX = 200;
var headY = 340;
var headDiameter = 75;

var hatX = 200;
var hatY = 320;
var hatDiameter = 85;

var hairX = 200;
var hairY = 364;
var hairDiameter = 120;

var bodyX = 200;
var bodyY = 470;

var larmX = 160;
var larmY = 390;
var larmDiameter = 40;

var lwlarmX = 155;
var lwlarmY = 490;

var rarmX = 240;
var rarmY = 390;
var rarmDiameter = 40;

var lwrarmX = 245;
var lwrarmY = 475;

var llegX = 175;
var llegY = 645;

var rlegX = 225;
var rlegY = 645;

var lshuX = 175;
var lshuY = 730;
var lshuDiameter = 35;

var rshuX = 229;
var rshuY = 730;
var rshuDiameter = 35;

var shapeX = 300;
var shapeY = 340;

var bgcircX = 150;
var bgcircY = 150;
var bgcircDiameter = 25;

var bg2cX = 300;
var bg2cY = 340;
var bg2cDiameter = 30

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup()
{
  createCanvas(600,800);
  for(var i = 0; i < 10; i++){
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(120);
  }
  createCharacter(250,350);
}

function draw()
{
   background(134,196,249);
   bigCirc();
   bg2c();
   stroke(0);
   fill(0);
   createBorders(6);
   saySo();
   shapeMovement();
  //background circle 1
   createShape();
   createHat();
   createHair();
   createBody();
   createLeftleg();
   createRightleg();
   createHead();
   createFace();
   createLeftarm();
   createLeftarmshoulder();
   createRightarm();
   createRightarmshoulder();
   createRightshoe();
   createLeftshoe();
}

function bg2c()
{
  fill(26,136,229);
  circle(bg2cX,bg2cY,bg2cDiameter);
  if(bg2cX <= 600){
    bg2cX+=10;}
  else if(bg2cX == 550 || bg2cX <= 600){
    bgcircX+=4;}
  else if(bg2cX > 600){
    bg2cX = 350;}
  if(bg2cY <= 800){
    bg2cY+=3;}
  else if(bg2cY == 750 || bg2cY <= 800){
    bg2cY+=5;}
  else if(bg2cY > 500){
    bg2cY = 40;}
  if(bg2cDiameter <= 200){
    bg2cDiameter+=8;}
  else if(bg2cDiameter > 400 || bg2cDiameter <= 300){
    bg2cDiameter+=2;}
  else if(bg2cDiameter > 300){
    bg2cDiameter = 30;}
}

function bigCirc()
{
  fill(245,94,172);
  circle(bgcircX,bgcircY,bgcircDiameter);
  if(bgcircX <= 600){
    bgcircX+=10;}
  else if(bgcircX == 550 || bgcircX <= 600){
    bgcircX+=4;}
  else if(bgcircX > 600){
    bgcircX = 50;}
  if(bgcircY <= 800){
    bgcircY+=3;}
  else if(bgcircY == 750 || bgcircY <= 800){
    bgcircY+=5;}
  else if(bgcircY > 500){
    bgcircY = 50;}
  if(bgcircDiameter <= 200){
    bgcircDiameter+=8;}
  else if(bgcircDiameter > 400 || bgcircDiameter <= 300){
    bgcircDiameter+=2;}
  else if(bgcircDiameter > 300){
    bgcircDiameter = 25;}
}

function createShape()
{
  fill(70,35,245);
  // draw the shape
  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }   
}

function shapeMovement()
{
  // move the shape
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
  // check to see if the shape has gone out of bounds
  for(var i = 0; i < shapeXSpeeds.length; i++){
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
  }
  if(shapeXs[i] > width)
  {
    shapeXs[i] = 0;
  }
  if(shapeXs[i] < 0)
  {
    shapeXs[i] = width;
  }
  if(shapeYs[i] > height)
  {
    shapeYs[i] = 0;
  }
  if(shapeYs[i] < 0)
  {
    shapeYs[i] = height;
  }
}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
}

function createBorders(thickness)
{
  // top border
  rect(0,0,width,thickness);
  // left border
  rect(0,0,thickness,height);
  // bottom border
  rect(0,height-thickness,width,thickness);
  // right upper border
  rect(width-thickness,0,thickness,height);
}

function saySo()
{
  textSize(20);
  text('"A Bid Of Adieu & Thanks" :)', 300, 510);
  text('By April Wilson-Nolen', 300, 540); 
}

 function createHat()
{
  //hat
  fill(180,134,249);
  circle(hatX,hatY,hatDiameter);
}

function createHair()
{
  //hair
  fill(0);
  circle(hairX,hairY, hairDiameter);
}

function createBody()
{
  //body
  fill(146,43,234)
  ellipse(bodyX,bodyY,100,200);
}

function createLeftleg()
{
  //left leg
  fill(92,106,246);
  ellipse(llegX,llegY,40,200);
}

function createRightleg()
{
  //right leg
  fill(92,106,246);
  ellipse(rlegX,rlegY,40,200);
}

function createHead()
{
  //head
  fill(250,217,178);
  circle(headX,headY,headDiameter);
}

function createFace()//;
{
  //*face*//
  //*righteye*//
  fill(255, 255, 255);
  ellipse(185, 330, 13, 5);
  fill(10, 103, 233);
  circle(185, 330, 3);
  //*lefteye*//
  fill(255, 255, 255);
  ellipse(215, 330, 13, 5);
  fill(10, 103, 233);
  circle(215, 330, 3);
  //*mouth*//
  fill(232, 25, 78);
  ellipse(200, 355, 18, 5);
  line()
}

function createLeftarm()
{
  //left arm
  fill(250,217,178);
  ellipse(lwlarmX, lwlarmY, 35,200);
}

function createLeftarmshoulder()
{
  //left arm shoulder
  fill(148,43,233);
  circle(larmX,larmY,larmDiameter);
}

function createRightarm()
{
  //right arm
  fill(250,217,178);
  ellipse(lwrarmX,lwlarmY, 35,200);
}

function createRightarmshoulder()
{
  //right arm shoulder
  fill(148,43,233);
  circle(rarmX,rarmY,rarmDiameter);
}

function createRightshoe()
{
  //right shoe
  fill(200,141,251);
  circle(rshuX,rshuY,rshuDiameter);
}

function createLeftshoe()
{
  //left shoe
  fill(200,141,251);
  circle(lshuX,lshuY,lshuDiameter);
}

function getRandomNumber()
{
  return random(1,20);
}