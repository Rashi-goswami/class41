var canvas, backgroundImage;
var car1,car1_img;
var car2,car2_img;
var car3,car3_img;
var car4,car4_img;
var cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
 car1_img=loadImage("car1.png")
 car2_img=loadImage("car2.png")
 car3_img=loadImage("car3.png")
 car4_img=loadImage("car4.png")
 ground=loadImage("ground.png")
 track=loadImage("track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
