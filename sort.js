const { LinkedList } = require("./mergeLinkedList");

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

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  let middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  let pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] < pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
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
  return array;
}

function bucketSort(
  array,
  start = 0,
  end = array.length - 1,
  bucketArray = []
) {
  if (array.length > 0) {
    let minIndex = array.indexOf(Math.min(...array));
    bucketArray.push(array[minIndex]);
    array.splice(minIndex, 1);
    bucketSort(array, 0, array.length - 1, bucketArray);
  }
  if (array.length === 0) {
    return bucketArray;
  }
}

function randomBubble(array, swaps = array.length * 2) {
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
      swap(array, i, (i + 1) % array.length);
      swaps--;
    }
  }
  if (swaps > 0) {
    return randomBubble(array, swaps);
  }
  return array;
}

function displayList(list){
    let currNode = list.head;
    let arr = [];
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    return arr;
  }

function main() {
  let unsortedArray = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ];
  let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
  //mergeSort(array);
  //console.log(qSort(unsortedArray));
  //console.log(mSort(unsortedArray));
    let newMergeList = new LinkedList();
    for(let i = 0; i < unsortedArray.length; i++){
        console.log(unsortedArray[i]);
        newMergeList.insertLast(unsortedArray[i]);
    }
  //   console.log(newMergeList);
  //   console.log(bucketSort([5, 4, 3, 2, 1]));
  //   console.log(Math.floor(Math.random() * 2));
  //   console.log(Math.floor(Math.random() * 2));
  //   console.log(Math.floor(Math.random() * 2));
  //   console.log(Math.floor(Math.random() * 2));
  // console.log(randomBubble([1, 2, 3, 4, 5]));
  console.log(mergeSort(displayList(newMergeList)));
}

main();
