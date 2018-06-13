document.getElementById("myInput").addEventListener("search", myFunction);


//this function myFunction allows for you to print the phrase "you are searching for ___ " 
//however, as of now, it is only showing up for a half a second before disappearing --> luckily this function is unecessary
function myFunction() {
    var x = document.getElementById("myInput");
    document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
}


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
	console.log("good job you pressed the enter key")
}