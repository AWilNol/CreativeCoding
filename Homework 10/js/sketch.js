/*
 the setup function ensures we have a canvas to draw on,
 and is only done one time
 */
var myFavoriteNumber = 7;
var name = "John Sena";
var age = 67;
var redColor = 123;
var greenColor = 39;
var blueColor = 21;
function doSomething()
  {
   var myFavoriteColor = "green";
  }
for(var i = 0; i < 5; i++)
  {
  console.log(i);
  }

function setup()
  {
    createCanvas(500,600);
  }
function draw()
  {
    background(redColor,greenColor,blueColor);
    redColor++;
    greenColor++;
    blueColor++;
    myFavoriteNumber+= 2;
    console.log(myFavoriteNumber);
    // following line creates circle at 35(x), 55(y), 25px wide
    circle(35,55,25);
  }