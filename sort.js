function mergeSort(array, count = 0) {
  count = count + 1;
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left, count);
  right = mergeSort(right, count);

  if (count) {
    console.log(array);
    console.log(array.length);
    debugger;
  }

  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  debugger;
  return array;
}

// What are the first 2 lists to be merged?
// [ 1, 2, 9, 21, 26, 28, 29, 45 ] [ 16, 27, 34, 39, 40, 43, 46, 49 ]
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// [[21 , 1], [26, 45]]
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// UNDERSTANDING QUICKSORT
// The pivot could have been either 14 or 17 because everything to the left of either is less than 
// and everything to the right is greater

function main() {
  let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
  mergeSort(array);
}

main();
