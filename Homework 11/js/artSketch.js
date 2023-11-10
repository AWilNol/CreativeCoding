var bgcircX = 50;
var bgcircY = 50;
var bgcircDiameter = 25;

var bg2cX = 40;
var bg2cY = 40;
var bg2cDiameter = 30


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


function setup()
{
  createCanvas(600,800);
}
function draw()
{
   background(134,196,249);

  //background circle 1
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
    
  //background circle 2
  fill(176,217,251);
  circle(bg2cX,bg2cY,bg2cDiameter);
  if(bg2cX <= 600){
    bg2cX+=10;}
  else if(bg2cX == 550 || bg2cX <= 600){
    bgcircX+=4;}
  else if(bg2cX > 600){
    bg2cX = 40;}
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

  //hat
  fill(180,134,249);
  circle(hatX,hatY,hatDiameter);

  //hair
  fill(0);
  circle(hairX,hairY, hairDiameter);

  //body
  fill(146,43,234)
  ellipse(bodyX,bodyY,100,200);

  //left leg
  fill(92,106,246);
  ellipse(llegX,llegY,40,200);

  //right leg
  fill(92,106,246);
  ellipse(rlegX,rlegY,40,200);

  //head
  fill(250,217,178);
  circle(headX,headY,headDiameter);

  //left arm
  fill(250,217,178);
  ellipse(lwlarmX, lwlarmY, 35,200);

  //left arm shoulder
  fill(148,43,233);
  circle(larmX,larmY,larmDiameter);

  //right arm
  fill(250,217,178);
  ellipse(lwrarmX,lwlarmY, 35,200); 

  //right arm shoulder
  fill(148,43,233);
  circle(rarmX,rarmY,rarmDiameter);

  //right shoe
  fill(200,141,251);
  circle(rshuX,rshuY,rshuDiameter);

  //left shoe
  fill(200,141,251);
  circle(lshuX,lshuY,lshuDiameter);

  
}
