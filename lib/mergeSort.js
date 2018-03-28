const mergeSort = array => {

  //base case
  if (array.length <= 1) {
    return array;
  }
  
  const midArrayPoint = Math.floor(array.length / 2);
  const array1 = array.slice(0, midArrayPoint);
  const array2 = array.slice(midArrayPoint);

  return mergeTwoArrays(mergeSort(array1), mergeSort(array2))

}

const mergeTwoArrays = (array1, array2) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i])
      i++;
    } else {
      mergedArray.push(array2[j])
      j++;
    }
  }

  return [...mergedArray, ...array1.splice(i), ...array2.splice(j)]
}






module.exports = mergeSort;






  // let splitArrays = array.reduce((arrayOfArrays, number) => {
  //   let arrayOfOne = [];
  //   arrayOfOne.push(number);
  //   arrayOfArrays.push(arrayOfOne);
  //   return arrayOfArrays;
  // }, [])
 
  // mergeArrays(splitArrays);

  // function mergeArrays(splitArrays) {
  //   let array1 = splitArrays.shift();
  //   let array2 = splitArrays.shift();
  //   let mergedArray = [];

  //   mergeTwoArrays(array1, array2);
    
  //   function mergeTwoArrays(array1, array2) {
  //     if (!array1.length && !array2.length) {
  //       splitArrays.push(mergedArray);
  //       return splitArrays[0];
  //     }
        
  //     if (array1[0] <= array2[0] && array1.length && array2.length) { 
  //       mergedArray.push(array1.shift())
  //     } else if (array2[0] < array1[0] && array1.length && array2.length) {
  //       mergedArray.push(array2.shift())
  //     } else if (!array1.length) { 
  //       mergedArray.push(...array2.splice(0, array2.length)) 
  //     } else if (!array2.length) {
  //       mergedArray.push(...array1.splice(0, array1.length))
  //     }
      
  //     mergeTwoArrays(array1, array2)
  //   }

  //   if (splitArrays.length === 1) {
  //     return splitArrays[0];
  //   }
    
  //   mergeArrays(splitArrays);

  // }

  // return splitArrays[0];