const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/array-generator.js');
const bubbleSort = require('../lib/bubbleSort.js');

//expect(["a","b"]).to.be.sorted()

describe('bubbleSort', () => {

  it('should sort an unsorted array', () => {
    let unsorted = arrayGenerator(5);

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 1000 items', () => {
    let unsorted = arrayGenerator(1000);

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 10000 items', () => {
    let unsorted = arrayGenerator(10000);

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

})



//TEST TIMED-OUT :(
  // it('should sort an unsorted array with 100,000 items', () => {
  //   let unsorted = arrayGenerator(100000);

  //   bubbleSort(unsorted);

  //   expect(unsorted).to.be.sorted();
  // })