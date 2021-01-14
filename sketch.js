var bullet, speed, wright;
var wall, thickness;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

  thickness = random(22, 83);
  weight = random(30,52);
  speed = random(223,321);
}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

if(damage > 10){
  wall.shapeColor = color(255,0,0);

}

if(damage < 10){
  wall.shapeColor = color(0,255,0);
}
  }

  drawSprites();

  textSize(20);
  text(damage,1200,50);
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}