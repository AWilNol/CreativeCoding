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
function setup()
  {
    createCanvas(500,800);
/* I notice with this one it will stop, 
where just random would not. I tried max but it cleared
the shapes from the body.*/
    movement = Math.floor(Math.randomGaussian() * 10) + 1;
  } 
function draw()
  {
    background(redColor,greenColor,blueColor);
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