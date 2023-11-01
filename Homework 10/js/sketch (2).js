function setup()
  {
    createCanvas(500,600);
  }
function draw()
  {
    background(120, 45, 145);
    //*hair*//
    fill(103, 59, 21);
    rect(213, 60, 75, 110);    
    //*head**//
    fill(251, 215, 153);
    circle(250, 100, 65);
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
    line()
    //*body*//
    fill(200, 58, 590);
    rect(200, 132, 95, 115);
    //*lefthand*//
    fill(251, 215, 153);
    circle(174, 255 ,40);
    //*leftarm*//
    fill(200, 75, 600);
    rect(150, 132, 45, 125);
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
    fill(244,197, 248);
    textSize(20);
    text('"Hands In My Pocket"', 150, 510);
    text('By April Wilson-Nolen', 150, 540);
  }