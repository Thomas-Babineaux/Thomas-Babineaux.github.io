// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  // TODO 1a & 1c: Nested loops to iterate over the image data
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      // TODO 1d: Retrieve, convert, alter, and update the image array
      let rgbString = image[i][j];
      let rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      image[i][j] = rgbArrayToString(rgbNumbers);
    }
  }
}

// TODO 2: Call applyFilter inside the applyAndRender function
// (Place this where the comment indicates)
applyFilter(reddify); // Assuming reddify is already implemented

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  // Store the background color
  const backgroundColor = image[0][0];

  // Copy the applyFilter logic and modify as needed
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      // Check if the pixel is the background color
      if (image[i][j] !== backgroundColor) {
        // Apply the filter to non-background pixels
        let rgbString = image[i][j];
        let rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        image[i][j] = rgbArrayToString(rgbNumbers);
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  // Use the ternary operator to keep the number within the range of 0 - 255
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

// TODO 3: Create reddify function
function reddify(array) {
  // Set the RED index of the array to have a value of 200
  array[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(array) {
  // Subtract 50 from the BLUE value and keep it in bounds
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}

function increaseGreenByBlue(array) {
  // Add BLUE and GREEN values together and keep it in bounds
  array[GREEN] = keepInBounds(array[BLUE] + array[GREEN]);
}



// CHALLENGE code goes below here
