//importing the request
const request = require('request');
//getting input
const breedName = process.argv[2];
let link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; //getting the URL

request(link, (error, response, body) =>{

  if (error) { //if URL does not work
    console.log('Could not fetch URL ', error);
    return;
  }
  const data = JSON.parse(body); //converting JSON string to an actual object
  if (data.length === 0) { //if data is empty, breed is not found.
    console.log("Breed name is not found");
    return;
  }
  console.log(data[0]['description']);
});