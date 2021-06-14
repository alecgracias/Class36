var  database;
var position;
var form,player,game
var gameState=0
var playerCount

function setup(){
  database = firebase.database();
 
  createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();

 
}

function draw(){
 
  
   
  
}

