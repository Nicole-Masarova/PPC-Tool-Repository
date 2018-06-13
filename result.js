const http = require("https");

http.get('https://www.seasoned.co/services/services/rest/config',function(resp){
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(JSON.stringify(data));
  });
});
