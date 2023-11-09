var x = 50;
var y = 50;
var diameter = 25;
function setup()
{
  createCanvas(800,600);
}
function draw()
{
  background(40,98,215);
  fill(24,200,29);
  circle(x,y,diameter);
  if(x <= 200)
        {
            x+=10;
        } 
        else if(x > 200 && x <=300)
        {
            x+=8;
            console.log("second else if for x");
        }
        else if(x > 300)
        {
           x = 50;
        }
        
        if(y <= 200)
        {
            y+=12;
        }
          
        else if(y > 200 && y <= 300)
        {
            y+=3; 
            console.log("second else if for y");
        }
        else if(y > 300)
        {
            y = 50;
        }
        if(diameter <= 200)
        {
            diameter+=10;
        }
          
        else if(diameter > 200 && diameter <= 300)
        {
            diameter +=4;
            console.log("second else if for diameter");
        }
        else if(diameter > 300)
        {
            diameter = 25;
        }
        
    }