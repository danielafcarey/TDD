const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const arrayGenerator = require('../lib/array-generator.js');
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', () => {

  it('should sort an unsorted array', () => {
    let unsorted = arrayGenerator(5);

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an array with multiple of the same elements in it', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array of letters with multiple of the same letter', () => {
    let unsorted = ['c', 'c', 'd', 'e', 'a'];

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should return an array of the same length', () => {
    let unsorted = [1, 6, 6, 7, 3, 4]

    bubbleSort(unsorted);

    expect(unsorted.length).to.equal(6);
  })

  it('should sort an array that includes negative numbers', () => {
    let unsorted = [1, 6, 6, -7, 3, 4]

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

  it('should sort an unsorted array with so many items', () => {
    let unsorted = arrayGenerator(12000);

    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
    console.log('bubbleSort max before timeout: ~12,000')
  })
  
})

