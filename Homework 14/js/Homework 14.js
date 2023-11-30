// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
// x and y for a shape
var shapeX = 30;
var shapeY = 50;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var shape1, shape2;
 function setup()
 {
    createCanvas(800,600);
    for(var i = 0; i < 6; i++)
    {
    // get a random speed when the it first starts
    shape1 = new Rectangle(100,100,20,30,120,20,250);
    // x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var shape1, shape2;
 function setup()
 {
    createCanvas(800,600);
    for(var i = 0; i < 6; i++)
    {
    // get a random speed when the it first starts
    shape1 = new Rectangle(100,100,20,30,120,20,250);
    shape2 = new Rectangle(200,300,50,80,220,120,20);
    // x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var shape1, shape2;
 function setup()
 {
    createCanvas(800,600);
    for(var i = 0; i < 6; i++)
    {
    // get a random speed when the it first starts
    shape1 = new Rectangle(100,100,20,30,120,20,250);
    shape2 = new Rectangle(200,300,50,80,220,120,20);
    shape3 = new Circle(142,38,60);
    shape4 = new Circle(200,380,40);
    shape5 = new Circle(400,80,55);
    createCharacter(250,350);
 } 
  

 function draw()
 {
    background(142,38,169);
    stroke(0);
    fill(0);    
    // call createBorders function
    createBorders(9);
    //exit message
    saySo();
    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    // call createEnemy    
    createEnemy();
     // get a random speed when the it first starts
    enemyMovement();
    // check to see if the character has left the exit
    characterBoundary();
    // create the shape based on the mouse click
    mouseClack();
    getRandomNumber();
}

function saySo()
{
  textSize(18);
  text("Next-ZOMBIES! >",width-170,height-50)
}

function mouseClack()
{
  fill(55,130,201);
  circle(mouseShapeX,mouseShapeY,30);  
}

function createEnemy()
{
  fill(13,145,14);
  // draw the shape
shape1.draw();
shape2.draw();
shape3.draw();
shape4.draw();
shape5.draw();
shape6.draw(); 
}

function enemyMovement()
{
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  shapeX += shapemyXsSpeed;
  shapeY += shapemyYsSpeed;
  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;
  // check to see if the shape has gone out of bounds
  if(shapeX > width)
  {
      shapemyXs = 0;
  }
  else if(shapemyXs < 0)
  {
      shapemyXs = width;
  }
  if(shapemyYs > height)
  {
      shapemyYs = 0;
  }
  else if(shapemyYs < 0)
  {
      shapemyYs = height;
  }
}

function characterMovement()
{
  // handle the keys
  if(keyIsDown(w))
  {
      characterY -= 20;   
  }
  if(keyIsDown(s))
  {
      characterY += 20;   
  }
  if(keyIsDown(a))
  {
      characterX -= 20;   
      console.log("movement: " + characterX);
  }
  if(keyIsDown(d))
  {
      characterX += 20;   
  }
}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
}

function drawCharacter()
{
  fill(23,40,123);
  circle(characterX,characterY,25);
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
  rect(width-thickness,0,thickness,height-50);
}

function characterBoundary()
{
if(characterX > width && characterY > width - 50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("Congrats!",width/2-50,height/2-50);
    }   
}
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      characterX -= 10;
  } 
  else if (keyCode === RIGHT_ARROW) {
      characterX += 10;
  }
  else if (keyCode === UP_ARROW) {
      characterY -= 10;
  }
  else if (keyCode === DOWN_ARROW) {
      characterY += 10;
  }
 }
    createCharacter(250,350);
 } 
  

 function draw()
 {
    background(142,38,169);
    stroke(0);
    fill(0);    
    // call createBorders function
    createBorders(9);
    //exit message
    saySo();
    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    // call createEnemy    
    createEnemy();
     // get a random speed when the it first starts
    enemyMovement();
    // check to see if the character has left the exit
    characterBoundary();
    // create the shape based on the mouse click
    mouseClack();
    getRandomNumber();
}

function saySo()
{
  textSize(18);
  text("Next-ZOMBIES! >",width-170,height-50)
}

function mouseClack()
{
  fill(55,130,201);
  circle(mouseShapeX,mouseShapeY,30);  
}

function createEnemy()
{
  fill(13,145,14);
  // draw the shape
shape1.draw();
shape2.draw();
shape3.draw();
shape4.draw();
shape5.draw();
shape6.draw(); 
}

function enemyMovement()
{
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  shapeX += shapemyXsSpeed;
  shapeY += shapemyYsSpeed;
  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;
  // check to see if the shape has gone out of bounds
  if(shapeX > width)
  {
      shapemyXs = 0;
  }
  else if(shapemyXs < 0)
  {
      shapemyXs = width;
  }
  if(shapemyYs > height)
  {
      shapemyYs = 0;
  }
  else if(shapemyYs < 0)
  {
      shapemyYs = height;
  }
}

function characterMovement()
{
  // handle the keys
  if(keyIsDown(w))
  {
      characterY -= 20;   
  }
  if(keyIsDown(s))
  {
      characterY += 20;   
  }
  if(keyIsDown(a))
  {
      characterX -= 20;   
      console.log("movement: " + characterX);
  }
  if(keyIsDown(d))
  {
      characterX += 20;   
  }
}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
}

function drawCharacter()
{
  fill(23,40,123);
  circle(characterX,characterY,25);
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
  rect(width-thickness,0,thickness,height-50);
}

function characterBoundary()
{
if(characterX > width && characterY > width - 50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("Congrats!",width/2-50,height/2-50);
    }   
}
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      characterX -= 10;
  } 
  else if (keyCode === RIGHT_ARROW) {
      characterX += 10;
  }
  else if (keyCode === UP_ARROW) {
      characterY -= 10;
  }
  else if (keyCode === DOWN_ARROW) {
      characterY += 10;
  }
 }
    createCharacter(250,350);
 } 
  

 function draw()
 {
    background(142,38,169);
    stroke(0);
    fill(0);    
    // call createBorders function
    createBorders(9);
    //exit message
    saySo();
    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    // call createEnemy    
    createEnemy();
     // get a random speed when the it first starts
    enemyMovement();
    // check to see if the character has left the exit
    characterBoundary();
    // create the shape based on the mouse click
    mouseClack();
    getRandomNumber();
}

function saySo()
{
  textSize(18);
  text("Next-ZOMBIES! >",width-170,height-50)
}

function mouseClack()
{
  fill(55,130,201);
  circle(mouseShapeX,mouseShapeY,30);  
}

function createEnemy()
{
  fill(13,145,14);
  // draw the shape
shape1.draw();
shape2.draw();
shape3.draw();
shape4.draw();
shape5.draw();
shape6.draw(); 
}

function enemyMovement()
{
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  shapeX += shapemyXsSpeed;
  shapeY += shapemyYsSpeed;
  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;
  // check to see if the shape has gone out of bounds
  if(shapeX > width)
  {
      shapemyXs = 0;
  }
  else if(shapemyXs < 0)
  {
      shapemyXs = width;
  }
  if(shapemyYs > height)
  {
      shapemyYs = 0;
  }
  else if(shapemyYs < 0)
  {
      shapemyYs = height;
  }
}

function characterMovement()
{
  // handle the keys
  if(keyIsDown(w))
  {
      characterY -= 20;   
  }
  if(keyIsDown(s))
  {
      characterY += 20;   
  }
  if(keyIsDown(a))
  {
      characterX -= 20;   
      console.log("movement: " + characterX);
  }
  if(keyIsDown(d))
  {
      characterX += 20;   
  }
}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
}

function drawCharacter()
{
  fill(23,40,123);
  circle(characterX,characterY,25);
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
  rect(width-thickness,0,thickness,height-50);
}

function characterBoundary()
{
if(characterX > width && characterY > width - 50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("Congrats!",width/2-50,height/2-50);
    }   
}
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      characterX -= 10;
  } 
  else if (keyCode === RIGHT_ARROW) {
      characterX += 10;
  }
  else if (keyCode === UP_ARROW) {
      characterY -= 10;
  }
  else if (keyCode === DOWN_ARROW) {
      characterY += 10;
  }
 }