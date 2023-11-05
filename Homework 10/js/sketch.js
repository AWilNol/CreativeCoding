var myFavoriteNumber = 7;
var name = "John Cena";
var age = 67;
var myfavoriteColor = "blue";
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var larmX = 150;
var larmY = 132;
var larmDirection = 2;

var bodyX = 200;
var bodyY = 312;
var bodyDirection = 1;

var headX = 250;
var headY = 100;
var headDiameter = 65;
var headDirection = 2;
var headDiameterDirection = 2;
var headCount = 0;

var size = 20;
var count = 0;
var sizeDirection = 2;

var x = 100;
var y = 200;
var diameter = 500;
function doSomething()
  {
   var myFavoriteColor = "blue";
   var myFavoriteNumber = 7;
  }
for(var i = 0; i < 3; i++)
  {
  console.log(i);
  }
  var movement = 8;
function setup()
  {
    createCanvas(500,800);
    movement = Math.floor(Math.random() * 10) +1;
  } 
function draw()
  {
    background(redColor,greenColor,blueColor);
    redColor++;
    greenColor++;
    blueColor++;
    myFavoriteNumber+= 2;
    /*
    this worked. It was so cool! Now it isn't working.
    Adding the other shapes that need to move. It seems like 
    I cut off the legs to the project; everything froze, 1/2 disappeared.*/ 
    fill(569);
    circle(x,y,diameter);
    fill(redColor,greenColor,blueColor);
    circle(x,y,300);
    x++;
    y++;
    if(x >= 500 || x <= 0)
   {
      movement *= -1;
    }

     x += movement;
    //*hair*//
    fill(103, 59, 21);
    rect(213, 60, 75, 110);    
    //*head**//
    fill(251, 215, 153);
    circle(headX, 100, 65);
    shapeSize(headDiameter)
    headX+=headDirection;
    if(headX >= 500 || headX <= 0)
    {
      headDirection *= -1;
    }
    headDiameter+=headDiameterDirection;
    headCount++;
    if(headCount > 5)
    {
      headDiameterDirection *= -1;
      headCount = 0;
    }
    //*face*//
    //*righteye*//
    fill(255, 255, 255);
    ellipse(240, 90, 13, 5);
    fill(10, 103, 233);
    circle(240, 90, 3);
    //*lefteye*//
    fill(255, 255, 255);
    ellipse(265, 90, 13, 5);
    fill(10, 103, 233);
    circle(265, 90, 3);
    //*mouth*//
    fill(232, 25, 78);
    ellipse(250, 115, 18, 5);
    line();
    //*body*//
    fill(200, 58, 590);
    rect(bodyX, 132, 95, 115);
    bodyX+=bodyDirection;
    if(bodyX >= 500 || bodyX <= 0)
    {
      bodyDirection *= -1;
    }
    //*lefthand*//
    fill(251, 215, 153);
    circle(174, 255, 40);
    /*been froze since this*/
    //*leftarm*//
    fill(200, 75, 600);
    rect(150, larmY, 45, 125);
    larmY += larmDirection;
    if(larmY <= 0 || larmY >= 600)
    {
      larmDirection *= -1;
    }
    //*righthand*//
    fill(261, 215, 153);
    circle(300, 255 ,40);
    //*rightarm*//
    fill(200, 75, 600);
    rect(300, 132, 45, 125);
    //*leftleg*//
    fill(58, 47, 203);
    rect(197, 250, 50, 200);
    //*rightleg*//
    fill(58, 47, 203);
    rect(250, 250, 50, 200);
    //*belttie*//
    fill(10, 103, 229);
    rect(195, 247, 20, 110);
    //*belt*//
    fill(10, 103, 229);
    rect(195, 247, 105, 20);
    //*beltbuckle*//
    fill(255, 250, 255);
    circle(250, 250, 20);
    //*leftshoe*//
    fill(104, 41, 233);
    triangle(197, 470, 225, 440, 245, 470);
    //*rightshoe*//
    fill(104, 41, 233);
    triangle(250, 470, 270, 440, 300, 470);
    //*buckledeco*//
    point(250, 255);
    point(250, 250);
    point(250, 245);
    line(245, 242, 245,259);
    line(255, 242, 255, 259);
    //*text*//
    fill(244,197, 248);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *= -1;
      count = 0;
    }
    text('"Hands In My Pocket"', 150, 510);
    text('By April Wilson-Nolen', 150, 540);
    }
  