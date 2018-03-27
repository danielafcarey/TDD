const mergeSort = array => {
  // split array function
  // recursively call until you have arrays of 1

  // merge two arrays function(array1, array2)
  // compare index 0 of first array to index 0 of next array
  // if array1.length === 0
    // push ...array2 into new array
  // else if array2.length === 0
    // push ...array1 into new array
  // else if array1[0] < array2[0]
    // shift and push array1[0] into new array
  // else if array1[0] > array2[0]
    // shift and push array2[0] into new array

  // recursively call ^^ comparison until array1 and array2 .lengths === 0

  // call merge two arrays function on next two arrays
  // recursively call merge two arrays function on two arrays until all functions have been sorted into one large array
}



module.exports = mergeSort;