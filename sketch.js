var database;
var gameState=0,player,form,game;
var playerCount;
var allPlayers;



function setup(){
    createCanvas(500,500);
    
    database= firebase.database();

    game =  new Game();
    game.getState();
    game.start();
   
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    }

    if(gameState === 1){
        clear();
        console.log("Inside Play");
        game.play();
    }
}
