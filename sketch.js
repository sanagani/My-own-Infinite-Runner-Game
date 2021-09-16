var girlImg, girl;
var background, backgroundImg;
var stump, stumpImg, stumpGroup; 
var gameState = "play";

function preload(){
girlImg = loadImage("imageonline-co-transparentimage(1).jpg")
backgroundImg = loadImage("backdrop.jpg");
stumpImg = loadImage("tree stump.png");
}

function setup() {
createCanvas(600,600);

background = createSprite(300,300);
background.addImage("background", backgroundImg);
background.velocityX = -2

girl = createSprite(200,200,40,40);
girl.addImage("girl",girlImg);
girl.scale = .3
}

function draw() {
  background(200)

  if(gameState == "play"){
    spawnStump();

    if(background.x > 400){
      background.x = 300;
    }

    if(keyDown("space")){
      girl.velocityY = -10
    }
    girl.velocityY = girl.velocityY + .8

    if(stumpGroup.isTouching(girl)){
       gameState = "end"
    }
  }

  if(gameState == "end"){
    textSize(50);
    fill("red")
    stroke("black");
    text("GAME OVER",150,300);
    girl.VelocityX = 0;
    background.velocityX = 0;
    stump.lifetime = -1;

  }

  drawSprites();
}

function spawnStump(){
  if(frameCount%90 == 0){
    stump = createSprite(300,300);
    stump.addImage("stump", stumpImg)
    stump.x = Math.round(random(100,500));
    stump.velocityX = -2;
    stump.lifetime = 600;
    stump.setCollider(20);
    stumpGroup.add(stump);
  }
}