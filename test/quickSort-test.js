const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/array-generator.js');
const quickSort = require('../lib/quickSort.js');

describe('quickSort', () => {

  it('should sort an unsorted array', () => {
    let unsorted = arrayGenerator(5);

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 1,000 items', () => {
    let unsorted = arrayGenerator(1000);

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 10,000 items', () => {
    let unsorted = arrayGenerator(10000);

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array with 90,000 items', () => {
    let unsorted = arrayGenerator(90000);

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  //test for larger arrays

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

})