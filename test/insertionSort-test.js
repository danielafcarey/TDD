const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/array-generator.js');
const insertionSort = require('../lib/insertionSort.js');

describe('insertionSort', () => {

  it('should sort an unsorted array', () => {
    let unsorted = arrayGenerator(5);

    insertionSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 1000 items', () => {
    let unsorted = arrayGenerator(1000);

    insertionSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 10000 items', () => {
    let unsorted = arrayGenerator(10000);

    insertionSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  //test for larger arrays

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    insertionSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  //it should not continue checking the comparing the unsortedArray[0] with the items in the sorted array once unsortedArray[0] is greater than an item in the sortedArray

})