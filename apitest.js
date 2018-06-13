const http = require("https");

http.get('https://www.seasoned.co/services/services/rest/config',function(resp){
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
    console.log("Whoa! That's a lot of information.");
    console.log("What would you like to see?");
    console.log("The options are boi, gurl, and anything else. Please type one of those in. Make sure you spell it correctly!")
    function myFunction() {
    	var a=document.getElementById("text_a").value;
    	if (a=="boi") {
    		document.getElementById("answer").innerText="BOI!"
    	}else if (a=="gurl"){
    		document.getElementById("answer").innerHTML="GURL!";
    	}else{
    		document.getElementById("answer").innerHTML="LMAO!";
    	}
    }
  });
});
