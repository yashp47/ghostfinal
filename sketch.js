var ghost, ghost_running
var tower, tower_running
var door, door_running
var climber, climber_running

function preload(){
 
  ghost_running= loadAnimation("ghost-jumping.png","ghost-standing.png")
  tower_running= loadImage("tower.png")
  door_running= loadImage("door.png")
 climber_running= loadImage("climber.png") 
  spookySound= loadSound("spooky.wav")
}
function setup(){
createCanvas(600,600)

  tower=createSprite(300,300)
  tower.addImage("effel",tower_running)
   // tower.scale=0.7
  tower.velocityY=1
ghost= createSprite(200,250,20,20)
ghost.addAnimation("nun",ghost_running)
ghost.scale=0.3
}
function draw(){
  background(0)
if(tower.y>400){
  tower.y=300
}
    if(keyDown("space")){
       ghost.velocityY=-2
       }
  drawSprites()
}

