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

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array of letters with multiple of the same letter', () => {
    let unsorted = ['c', 'c', 'd', 'e', 'a'];

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should return an array of the same length', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    unsorted = quickSort(unsorted);

    expect(unsorted.length).to.equal(6);
  })

  it('should sort an array that includes negative numbers', () => {
    let unsorted = [1, 6, 6, -7, 3, 4]

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

  it('should sort an unsorted array with so many items', () => {
    let unsorted = arrayGenerator(75000);

    unsorted = quickSort(unsorted);

    expect(unsorted).to.be.sorted();
    console.log('quickSort max before timeout: ~75,000')
  })

})


