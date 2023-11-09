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
    if (x > 300) {
            x = 50;
        }
        else if (x > 200) {
            x += 5;
        }
        else if (x <= 300) {
            x += 10;
        } 
        
        if (y > 300) {
            y = 50;
        }
        else if (y > 200) {
            y += 1;
        } 
        else if (y <= 300) {
            y += 3;
        }

        if (diameter > 300) {
            diameter = 25;
        }
        else if (diameter > 200) {
            diameter += 4;
            console.log("second else if for diameter");
        } 
        else if (diameter <= 300) {
            diameter += 8;
        } 
        
    }