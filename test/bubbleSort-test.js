const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-sorted'));
const bubbleSort = require('../lib/bubbleSort.js');
// import bubbleSort from '../lib/bubbleSort.js';

//expect(["a","b"]).to.be.sorted()

describe('bubbleSort tests', () => {

  it('should sort an unsorted array', () => {
    let unsorted = [3, 4, 2, 5, 1];
    bubbleSort(unsorted);

    expect(unsorted).to.be.sorted();
  })

  it('should sort an unsorted array', () => {
    let unsorted = [3, 4, 2, 5, 1];
    bubbleSort(unsorted);

    assert.deepEqual(unsorted, [1, 2, 3, 4, 5])
  })

})