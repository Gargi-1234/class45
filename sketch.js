var startButton 
var greeting
var gameState = 0 


function setup() {
  createCanvas(800,400);
  
  startButton = createSprite(width/2,height/2,20,20)
  //startButton.position(width/2,height/2)
 // greeting = createElement('h2')
  welcome = createSprite(100,100,20,20)
  welcome.visible = false

}

function draw() {
  background(255,255,255);  

  if(mousePressedOver(startButton)){
    startButton.visible = false
    welcome.visible = true
    //text(" instructions ")
  }
// if condition for pressing space key changing gamestate to 1 
// if(gamestate = 1 )
// revise c7, c16, angryBird capstone , speed racer
  drawSprites();
}
