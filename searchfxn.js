document.getElementById("myInput").addEventListener("search", myFunction);

// Get the input field
var input = document.getElementById("myInput");


// Execute a function when the user pressus a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("enterKeyPressed").click();
  }
});
function enterKeyPressed() {
	location.href = 'result.html';
};