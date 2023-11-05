var myFavoriteNumber = 7;
var name = "John Cena";
var age = 67;
var redColor = 123;
var greenColor = 39;
var blueColor = 21;
/* Hi Michael, All that shows here is a background and circle,
 nothing is working. Is the order/grouping wrong? Can I better 
 place these? Does the order matter?*/
var x = 100;
var y = 200;
var diameter = 50;
function doSomething()
  {
   var myFavoriteNumber = 3;
   var myFavoriteColor = "green";
  }
for(var i = 0; i < 5; i++);
  {
  console.log(i);
  }
var movement = 8;
let angle = 0;
let x2 = 50;
let y2 = 50;



function setup()
  {
    createCanvas(500,800);
    angleMode(DEGREES);
    movement = Math.floor(Math.random() * 10) + 1;
  } 
function draw()
  {
    background(redColor,greenColor,blueColor); 
    push();
    translate(x2,y2);
    rotate(angle);
    fill(0);
    rectMode(CENTER);
    rect(0, 0, 100, 50);
    x2 = x + 2;
    angle = angle + 5;
    pop()

    push()
    translate(300,300);
    rotate(-angle * 3);
    scale(4);
    fill(50, 100, 255);
    rectMode(CENTER);
    rect(0,0,100, 50);
    pop();
    //without push/pop before the first translate, this will be affected by above, but
    // if you don't want that and want more math to calculate add-
    //rotate(-angle);
    //translate(-50, -50);


    
    fill(255);
    circle(x,y,diameter);
    fill(redColor,greenColor,blueColor);
    circle(x,y,25);
    if(x >= 500 || x <= 0)
    {
      movement *= -1;
    }
    
     x += movement;
  }
