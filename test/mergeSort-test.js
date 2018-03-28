const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/array-generator.js');
const mergeSort = require('../lib/mergeSort.js');

describe('mergeSort', () => {
  it('should sort an unsorted array', () => {
    let unsorted = arrayGenerator(5);

    unsorted = mergeSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 1000 items', () => {
    let unsorted = arrayGenerator(1000);

    unsorted = mergeSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 10000 items', () => {
    let unsorted = arrayGenerator(10000);

    unsorted = mergeSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  //test for larger arrays

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    unsorted = mergeSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

})