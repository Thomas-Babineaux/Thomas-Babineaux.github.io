/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){}
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);
  function handleKeyDown(event) {
    console.log(event.keyCode);
  }
 // change 'eventType' to the type of event you want to handle
var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    S: 83,
    D: 68
};
var walker = {
  x: 0,
  y: 0,
  SpeedX: 0,
  speedY: 0
};
$(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  
  /* 
  Called in response to events.
 
  */
function handleKeyDown(event) {
  if (event.which === KEY.LEFT){
    console.log("left pressed");
  } else if (event.which === KEY.UP){
    console.log("up pressed");
  } else if (event.which === KEY.RIGHT){
    console.log("Right pressed");
} else if (event.which === KEY.DOWN){
  console.log("Down pressed")
}
function handleKeyDown(event) {
  if (event.which === KEY.LEFT){
    walker.SpeedX = -5;
    walker.SpeedY = 0;
  }  else if (event.which === KEY.DOWN){
    walker.SpeedX = 0;
    walker.SpeedY = 5;
  } else if (event.which === KEY.UP){
    walker.SpeedX = 0;
    walker.SpeedY = -5;
  }  else if (event.which === KEY.RIGHT){
    walker.SpeedX = -5;
    walker.SpeedY = 0;
  } 
}
function handleKeyUp(event) {
  if (event.which >= KEY.LEFT && event.which <= KEY.DOWN) {
    walker.SpeedX = 0;
    walker.SPeedY = 0;
  }
}
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function repositionGaneItem() {
    walker.x += walker.SpeedX;
    walker.y += walker.speedY;
    wallCollision();
   }
    function redrawGameItem() {
    $("#walker").css("left". walker.x);
    $("#walker").css("top", walker.y);
  }
    function endGame() {
    clearInterval(interval);
    
    $(document).off();
  }
    function wallCollision(){
      if (walker.x < 0) {
        walker.x = 0;
      }
      if (walker.y < 0) {
        walker.y = 0;
      }
      if (walker.x + $("#walker").width() > $("#board").width()) {
        (walker.x + $("#board").width() - $("#walker").width()) ;
      }
      if (walker.y + $("#walker").height() > $("#board").height()) {
        walker.y = $("#board").height() - $("#walker").height();
      }
    }
  function newframe(){
    repositianGameItem()
    redrauGameItem();
    wallcollision();
  }
    setInterval(newfrane, 16);
    // turn off event handlers
    $(document).off();
  }

