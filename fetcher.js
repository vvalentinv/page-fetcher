const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2, 4);

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    fileSizeInBytes = fs.statSync(args[1]).size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`)
  });
});
