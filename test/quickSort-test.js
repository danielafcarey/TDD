const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const quickSort = require('../lib/quickSort.js');

describe('quickSort tests', () => {

  it('should sort an unsorted array', () => {
    let unsorted = [3, 4, 2, 5, 1];
    quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

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