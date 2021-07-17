var score =0
var bg, bgImg;
var stoneImg,stoneGrp,stone;
var diamond,diamondImg,diamondGrp,diamondSound;
var spikeImg,spikeGrp;


function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironmanImg=loadImage('images/iron.png')
  diamondImg=loadImage('images/diamond.png')
  stoneImg=loadImage('images/stone.png')
  diamondImg=loadImage('images/diamond.png')
  diamondSound=loadSound('sounds/diamondSound.mp3')
  spikeImg=loadImage('images/spikes.png')


 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg)
  bg.scale=2
  ironman=createSprite(200,500,25,25)
  ironman.addImage(ironmanImg)
  ironman.scale=0.2
  ground=createSprite(1000,600,100000000,10)
  ground.visible=false
  stoneGrp=new Group()
  diamondGrp=new Group()
  spikeGrp=new Group()
 

}

function draw() {
  background('red')
  drawSprites();
  fill('white')
  text('Total Score :'+score,475,25)
 
  if(keyDown('up')){
    ironman.velocityY=-10;
  }
  if(keyDown('left')){
    ironman.x=ironman.x-5;
  }
  if(keyDown('right')){
    ironman.x=ironman.x+5;
  }
  if(keyDown('down')){
    ironman.velocityY=10
  }
  ironman.velocityY=ironman.velocityY+0.5;
  ironman.collide(ground)
  bg.velocityY= 4 ;
  if(bg.y>600){
    bg.y=300
  }
  createStone()
  for(var num=0; num<stoneGrp.length;num++){
    var temp=stoneGrp.get(num)
    if(temp.isTouching(ironman)){
      ironman.collide(stoneGrp)
    }
  }
  createDiamond()
  for(var u=0 ; u<(diamondGrp).length;u++){
    var a=(diamondGrp).get(u);
    if(a.isTouching(ironman)){
        diamondSound.play()
        score=score+5
        a.destroy()
        a=null
    }
  }
  createSpike()
  for(var q=0;q<(spikeGrp).length;q++){
    var w=(spikeGrp).get(q);
    if(w.isTouching(ironman)){
      score=score-5
      w.destroy()
      w=null
    }
  }




}



function createStone(){
  if(frameCount%80===0){
    var stone=createSprite(0,0,50,50)
    stone.x=random(100,1200)
    stone.addImage(stoneImg)
    stone.scale=0.5
    stone.velocityY=5
    stoneGrp.add(stone)
    stone.lifetime=120
  }
}

function createDiamond(){
  if(frameCount%70===0){
    var diamond=createSprite(0,0,50,50)
    diamond.x=random(100,1200)
    diamond.addImage(diamondImg)
    diamond.scale=0.5
    diamond.velocityY=6
    diamond.lifetime=120
    diamondGrp.add(diamond)
  }
 
}

function createSpike(){
  if(frameCount%60===0){
    var spike=createSprite(0,0,50,50)
    spike.x=random(100,1200)
    spike.addImage(spikeImg)
    spike.scale=0.6
    spike.velocityY=8
    spike.lifetime=120
    spikeGrp.add(spike)
  }
}

