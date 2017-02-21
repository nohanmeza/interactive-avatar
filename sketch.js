//Nohan Meza (nm6621@bard.edu)
//Feb 20, 2017
//Idea 135
//Interactive avatar
//I worked on this alone.
// This intersects with the dynamic ideas of Victor because it's interactive, "scripts" the user in a sense because the comment makes them look at the gems, and s such reacts to that movement by the user. I'm really bad at drawing, still. I really believe I just have no talent whatsoever in anything visual. 



function setup() {

  createCanvas(500, 500);
   //are you ready

  // The Cookie
      fill (166, 123, 91);
      ellipse(250, 250,300,300);
      fill (212, 175, 55);
  // The crown
      triangle (200, 20, 170, 135, 230, 135);
      triangle (250, 20, 220, 135, 280, 135);
      triangle (300, 20, 270, 135, 330, 135);
  // The Crown's Jewel's
      fill (255, 0, 0);
      ellipse (250, 100, 20, 50);
      fill (0, 255, 0);
      ellipse (300, 100, 10, 30);
      ellipse (200, 100, 10, 30);
  // Choc Chips
  fill(1)
  var chocx = 30
  var chocy = 35
      ellipse (random(125, 150), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)
      ellipse (random(125, 150), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)
      ellipse (random(125, 365), random(180, 350), chocx, chocy)

 
}



function draw() {
   
  frameRate (60) 
 
   
     
   // Pick colors randomly
      r = random(255);
      g = random(255);
      b = random(255);
  
     
  // the whacky stuff
   if (mouseIsPressed && 
      mouseX > 240 && mouseX < 255  &&
      mouseY > 70 && mouseY < 120) {
      background (r, g, b);
      textSize (40)
    text("Behold the Mightycookie!", 30, 450)// The Cookie
      fill (166, 123, 91);
      ellipse(250, 250,300,300);
      fill (212, 175, 55);
  // The crown
      triangle (200, 20, 170, 135, 230, 135);
      triangle (250, 20, 220, 135, 280, 135);
      triangle (300, 20, 270, 135, 330, 135);
  // The Crown's Jewel's
      fill (255, 0, 0);
      ellipse (250, 100, 20, 50);
      fill (0, 255, 0);
      ellipse (300, 100, 10, 30);
      ellipse (200, 100, 10, 30);
  // Choc Chips
  fill(1)
  var chocx = 30
  var chocy = 35
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
    // The Cookie
      fill (166, 123, 91);
      ellipse(250, 250,300,300);
      fill (212, 175, 55);
  // The crown
      triangle (200, 20, 170, 135, 230, 135);
      triangle (250, 20, 220, 135, 280, 135);
      triangle (300, 20, 270, 135, 330, 135);
  // The Crown's Jewel's
      fill (255, 0, 0);
      ellipse (250, 100, 20, 50);
      fill (0, 255, 0);
      ellipse (300, 100, 10, 30);
      ellipse (200, 100, 10, 30);
  // Choc Chips
  fill(1)
  var chocx = 30
  var chocy = 35
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy)
      ellipse (random(115, 370), random(180, 350), chocx, chocy);
   }
           fill (r,g,b)
     textSize(13)
     text("You like shiny stuff don't you???",0, 50)
  
}
