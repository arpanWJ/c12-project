var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg,leaf,leafImg;
var spawnSprites;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg=loadImage("apple.png");
  leafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
 function spwanApples(){
  apples=createSprite(random(50,350),40,10,10);
  apples.scale=0.1;
   apples.addImage(applesImg);
   apples.velocityY=3;
   apples.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
}
 function spwanleaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.scale=0.1;
  leaf.addImage(leafImg);
  leaf.velocityY=3;
  leaf.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
   }
      
function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(frameCount%30==0){
    spawnSprites=Math.round(random(1,2));
    if(spawnSprites==1){
      spwanApples();
    }
    else{
      spwanleaf(); 
    }
   }
  drawSprites();
}