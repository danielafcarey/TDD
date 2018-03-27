const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/arrayGenerator.js');
const bubbleSort = require('../lib/bubbleSort.js');
// import bubbleSort from '../lib/bubbleSort.js';

//expect(["a","b"]).to.be.sorted()

describe('bubbleSort tests', () => {

  it('should sort an unsorted array', () => {
    let unsorted = [3, 4, 2, 5, 1];
    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  //it should sort an unsorted array with 1000 items
    //import js file for large array generator
    //generate large array
    //run bubbleSort on that array
    //expect that array to be sorted

  //it should sort an unsorted array with 10000 items
    //import js file for large array generator
    //generate large array
    //run bubbleSort on that array
    //expect that array to be sorted

  //it should sort an array with multiple of the same elements in it
    //create array with duplicates
    //run bubbleSort on that array
    //expect that array to be sorted

})