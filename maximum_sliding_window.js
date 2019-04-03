/*
Given a large array of integers and a window of size w, 
find the current maximum value in the window as the window slides through the entire array.

@returns {Array} The resulting array of every maximum from every window

Worst case is an array sorted by decreasing values.
*/

let findMaxInSubArray = function(arr, startIndex, endIndex) {
  let max = arr[startIndex];
  let maxIndex = startIndex;
  
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

let findMax = function(arr, startIndex, endIndex, maxIndex) {
  if (maxIndex === undefined) {
    return findMaxInSubArray(arr, startIndex, endIndex);
  }
  let max = arr[maxIndex];
  if(arr[endIndex] > max) {
    return endIndex;
  }
  if (maxIndex >= startIndex) {
    return maxIndex;
  }

  return findMaxInSubArray(arr, startIndex, endIndex);
}

let find_max_sliding_window = function(arr, window_size) {
  var result = [];
  let startIndex = 0;
  let endIndex = window_size - 1;
  let maxIndex;

  while (endIndex < arr.length) {
    maxIndex = findMax(arr, startIndex, endIndex, maxIndex)
    result.push(arr[maxIndex]);
    startIndex++;
    endIndex++;
  }

  return result;
};
