const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');
const { describe } = require('mocha');
describe('fetchBreedDescription', ()=>{
  it('returns a string description for a valid breed, via callback', (done)=>{
    fetchBreedDescription('Siberian', (err, desc)=>{
    //we except no error for this scenerio
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns (err) to be set, and desc to be null.where an invalid/non-existent breed is passed in.', (done)=>{
    fetchBreedDescription('aatdad', (err, desc)=>{
    //we except error for this scenerio
      let errorExpected = 'Breed name is not found';
      assert.equal(err, errorExpected);
      assert.equal(null, desc);
      done();
    });
  });
});