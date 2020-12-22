var bullet;
var wall, thickness;
var speed,speed1;
var weight;
var def;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(300,200,50,10);
  
  wall = createSprite(1500,200,thickness,height/2);

  speed1 = Math.round(random(1,10));
  weight = Math.round(random(400,1500));
thickness = random(22,83)
speed = random(223,321)
weight = (30,52)
 bullet.velocityX = speed1;

 console.log(def)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    var def = 0.5 * weight * speed * speed/thickness * thickness * thickness;
    if(def>10){
      bullet.shapeColor = color(225,0,0);
    }
    if(def < 10){
      bullet.shapeColor = color(0,255,0);
    }
   
    }
}