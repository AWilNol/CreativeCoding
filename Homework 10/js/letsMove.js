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
function setup()
  {
    createCanvas(800,500);
  } 
function draw()
  {
    background(redColor,greenColor,blueColor);
    fill(255);
    circle(x,y,diameter);
    fill(redColor,greenColor,blueColor);
    circle(x,y,25);
    x++;
    y++;
    if(x != 800)
    {
        x+=13;
        y+=13;
    }
   }