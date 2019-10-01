"use strict";

window.onload = setTimeout(location.reload(), 1000); 
  

addEventListener("DOMContentLoaded", () => {

let gameOver = false;
let amountOfLives = document.getElementById("lives-amount");
  
let runner = document.getElementById("runner");
let bird = document.getElementById("seagull");
let beach = document.getElementById("beach");
let background = document.getElementById("sky-background");
let gameOverInfo = document.getElementById("gameOver");
let startAgain = document.getElementById("startAgain");

let runnerWidth = runner.offsetWidth;
let runnerHeight = runner.offsetHeight;
let runnerX;
let runnerY;
let birdWidth = bird.offsetWidth;
let birdHeight = bird.offsetHeight;
let birdX;
let birdY;

let lives = parseInt(amountOfLives.innerHTML);


  document.onkeypress = (e) => {
    e = e || window.event;
    let charCode = e.keyCode || e.which;
    if (charCode === 32) {
        e.preventDefault();
        return false;
    }
  }

  document.onkeyup = (e) => {
    if (e.code === "Space") {
      if (!gameOver) {
        e.preventDefault();
        runner.classList.add("saltar");
        setTimeout(()=> {
        runner.classList.remove("saltar");
      }, 1500); 
      }
    }
        
    if(e.code === 'Enter'){
      if(gameOver){
        reset();
        resetOver();    
      }
    }
  }

  let gameLoop = () => {
    
    if(!gameOver){
      update();
      console.log("Entra a gameloop");
      
      if (gameOverr(runnerX, runnerY, runnerWidth, runnerHeight, birdX, birdY, birdWidth, birdHeight)) {
        if (lives === 1) {
          bird.classList.add('lose'); 
          runner.classList.add('lose');
          amountOfLives.innerHTML = 0; 
          bird.classList.remove('seagull-fly');
          runner.classList.remove('boy-run');
          gameOverInfo.classList.remove('hide');
          startAgain.classList.remove('hide');
          gameOver = true;
          window.cancelAnimationFrame(gameLoop);
          
          
        }else{
          lives -= 1;
          amountOfLives.innerHTML = lives;
          runner.classList.add('immunity');
          bird.classList.add('lose');
          bird.classList.remove('seagull-fly');
          window.cancelAnimationFrame(gameLoop);
  
          setTimeout(() => {
            reset();
          }, 2000);
          
        }
      }
    } 
      window.requestAnimationFrame(gameLoop);
  }
  
   
  window.requestAnimationFrame(gameLoop);

  function colision(boyX, boyY, boyWidth, boyHeight, birdX, birdY, birdWidth, birdHeight){
    if(boyX < birdX + birdWidth && boyX + boyWidth > birdX && 
          boyY < birdY + birdHeight && boyY + boyHeight > birdY){
        return true;
    }else{
        return false;
    } 
  }

  function update() {
    runnerX = runner.offsetLeft;
    runnerY = runner.offsetTop;
    birdX = bird.offsetLeft;
    birdY = bird.offsetTop;
  }

  
  function resetOver(){
    lives = 3;
    amountOfLives.innerHTML = lives;

    gameOverInfo.classList.add('hide');
    startAgain.classList.add('hide');    
  }

  
  function reset() {
    
    background.classList.add('sky-background-animation');
    beach.classList.add('beach-animation');
    
    runner.classList.remove('immunity');
    bird.classList.remove('lose'); 
    runner.classList.remove('lose');
    runner.classList.add('boy-run');
   
    bird.classList.add('seagull-fly');
    gameOver = false;
    window.requestAnimationFrame(gameLoop); 
  }

  function gameOverr(boyX, boyY, boyWidth, boyHeight, birdX, birdY, birdWidth, birdHeight) {
    if (colision(boyX, boyY, boyWidth, boyHeight, birdX, birdY, birdWidth, birdHeight)) { 

      background.classList.remove('sky-background-animation');
      beach.classList.remove('beach-animation');
      runner.classList.remove('boy-run');
      bird.classList.remove('seagull-fly');
      console.log("colision");
      return true;
    }else{
      return false;
    }
  }

});

  
