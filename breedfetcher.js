var http = require('http');
var fs = require('fs');
const request = require('request');
const process = require('process');
var args = process.argv;
var url = 'https://api.thecatapi.com/v1/breeds/search?q='; 
var breed = 'Siberian'//args[2];

const fetchBreedDescription = function(breedName, callback) {
  console.log('1' + callback);
request(url + breedName, function (error, response, body) {

  let err;
  if (error) { return error;
    
  }
  else {
    const data = JSON.parse(body);
    if (body === '[]') { 
      callback('breed not found',null);
    } else {
    callback(null,data[0].description);
  }
}
  
});
} 

module.exports = { fetchBreedDescription };



