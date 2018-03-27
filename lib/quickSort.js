const quickSort = array => {
  // define a pivot of array[array.length - 1]

  // compare pivot function
  // if pivot is greater than array[0]
    // push it in lessThanArray
  // if pivot is less than array[0]
    // push it in greaterThanArray
  //repeat recursive function on all items in array (array.length - 1(pivot) or shift them out of array so you can stop when array.length is 0)
  // get pivot location (# items in lessThan + 1) and put it back into original array or array of same length

  // repeat full function on lessThanArray and greaterThanArray as many times as necessary until all items are put back in their spot.

}



module.exports = quickSort;