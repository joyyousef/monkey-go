
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(70,530);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,590,1000,20);
  ground.velocityX=-3;
   ground.x=ground.width/2;
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
   textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  if (ground.x<100){
    ground.x=ground.width/2;
  }
  
  spawnBananas();
  spawnObstacles();
  if (keyDown("space")){
    monkey.velocityY=-12; 
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  drawSprites();
}

function spawnBananas(){
  if (World.frameCount%80===0){
    banana=createSprite(600,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.2;
    banana.lifetime=200;
    foodGroup.add(banana)
  }
}

function spawnObstacles(){
  if (World.frameCount%150===0){
    obstacle=createSprite(600,550);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}


