//importing the request
const request = require('request');
//getting input

const fetchBreedDescription = function(breedName, callback) {
  let link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; //getting the URL
  
  request(link, (error, response, body) =>{
    let desc;
    let errDesc = "";
    if (error) { //if URL does not work
      errDesc = `Could not fetch URL. ${error}`;
      desc = null;
     
    } else if (JSON.parse(body).length === 0) { //if data is empty, breed is not found.
      errDesc = "Breed name is not found";
      desc = null;
    
    } else {
      const data = JSON.parse(body); //converting JSON string to an actual object
      errDesc = null;
      desc = data[0]['description'];
    }
    callback(errDesc, desc);
  });
};

module.exports = {fetchBreedDescription};