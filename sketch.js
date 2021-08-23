var footBall,goalPost;
var player,computerPlayer;

var airHorn;


var gameOver;

function preload(){
  footBall       = loadImage("footBall.png");
  goalPost       = loadImage("goalpost.png");
  player         = loadImage("player.png");
  computerPlayer = loadImage("computerplayer.png");
  airHorn        = loadSound("air horn.mp3")
  
}

function setup(){
  createCanvas(400, 400);
  
  footBall =createSprite(200,200);
  footBall.scale = 2;
  footBall = addImage(footBall)
  
  goalPost = createSprite(200,390);
  goalPost.scale = 3;
  goalPost.addIamge(goalPost)
  
  player = createSprite(200)
  
}

function draw() {
  background(blue);
  
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Score: "+ score,900,30);
  
  
   player.y = World.mouseY;
  
   edges= createEdgeSprites();
   player.collide(edges);

  
    //code to play airhorn sound
  
  if(keyDown("space")) {
    
    airHorn.play();
    
  }

  
    if(footBall.isTouching(player)){
      
    footBall.bounceOff(player);
      
    }

}