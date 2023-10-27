/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,  
  };

  var walker1 = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                            // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker1.speedX = -5
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker1.speedX = 5
    } else if (event.which === KEY.UP) {
      console.log("up pressed")
      walker1.speedY = -5
    } else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker1.speedY = 5
    }
  }
  
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker1.speedX = 0
    } else if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker1.speedY = 0
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function repositionGameItem() {
    walker1.positionX += walker1.speedX
    walker1.positionY += walker1.speedY
  }

  function wallCollision() {
    if (walker1.positionX >= $("#board").width()-51) {
      walker1.positionX = $("#board").width()-51
      walker1.speedX = 0
    } else if (walker1.positionX <= 0) {
      walker1.positionX = 0
      walker1.speedX = 0
    } 

    if (walker1.positionY >= $("#board").height()-51) {
      walker1.positionY = $("#board").height()-51;
      walker1.speedY = 0;
    } else if (walker1.positionY <= 0) {
      walker1.positionY = 0;
      walker1.speedY = 0;
    }
  }

  
  function redrawGameItem() {
    $("#walker1").css("left", walker1.positionX)
    $("#walker1").css("top", walker1.positionY)
  }

  

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}