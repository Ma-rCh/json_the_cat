var http = require('http');
var fs = require('fs');
const request = require('request');
const process = require('process');
var args = process.argv;
var url = 'https://api.thecatapi.com/v1/breeds/search?q='; 
var breed= args[2];
var cb = request(url + breed, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); 

 if (error) {console.log( 'Error: ' + error )}
const data = JSON.parse(body);

if (data.length === 0 ) {console.log( 'Breed not found');}
else {console.log(data[0].description);}

});



