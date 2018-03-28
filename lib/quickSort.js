const quickSort = array => {

  if (array.length <= 1) {
    return array
  }

  let pivot = array[array.length - 1];
  const lessThanArray = [];
  const greaterThanArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      lessThanArray.push(array[i])
    } else {
      greaterThanArray.push(array[i])
    }
  }

  return [...quickSort(lessThanArray), pivot, ...quickSort(greaterThanArray)];
}

module.exports = quickSort;