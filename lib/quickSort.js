const quickSort = array => {
  // define a pivot of array[array.length - 1]
  let pivot = array[array.length - 1]

  // compare pivot function
  function comparePivot(pivot) {
    let i = 0
  // if pivot is greater than array[0]
    if (pivot < array[0]) {
    // push it in lessThanArray
      lessThanPivot.push(array[0])
  // if pivot is less than array[0]
    } else {
    // push it in greaterThanArray
      greaterThanPivot.push(array[0])
    }

  //repeat recursive function on all items in array (array.length - 1(pivot) or shift them out of array so you can stop when array.length is 0)
  // get pivot location (# items in lessThan + 1) and put it back into original array or array of same length

  // repeat full function on lessThanArray and greaterThanArray as many times as necessary until all items are put back in their spot.

  }
}



module.exports = quickSort;

//pivot (starts at end of array)
//current element (to compare to pivot) (starts at beg of array)
//wall (starts at beg of array)

//if CE is smaller than pivot, swap it with first element to right of wall and move wall up one
// if CE is larger, do nothing

//when CE === pivot, the sort is done
//switch pivot with first element to the right side of the wall
//move wall up one (to past the pivot)
//restart with sub-arrays left and right of pivot (left first I think)
  //if a sub array is only 1 element, it is sorted