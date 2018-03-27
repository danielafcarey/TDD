const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        j = 0;
      }
    }
  }

  return array;
}



module.exports = insertionSort;


//with new arrays: 
  // create sortedArray
  // shift array[0]
  // compare array[0] to sortedArray[sortedArray.length - 1] (backward for loop)
    // if (!sortedArray.length) {
      // push array[0]
    //} else if (array[0] < last item in sortedArray) {
      // check the next item in the sorted array
      //} else {
        // insert array[0] into sortedArray before item it was larger than
        //}