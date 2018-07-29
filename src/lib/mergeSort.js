// This is a helper function to merge the sub arrays back together
const mergeHalves = (arr, l, m, r) => {
  // this will get where the left ends and where the right ends of the passed in arrays
  const n1 = (m - l) + 1;
  const n2 = r - m;

  // create empty temp arrays to hold the sub arrays items
  // when they are filled they will look like this L = [[x],[x],[x],[x],[x],[x],[x]]
  const L = [];
  const R = [];

  // fill the empty defined temp arrays with each item in its own array.
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }
  // define our vars to start at 0 for our while loops
  // i is left start, j is right start and k is the index which is equal to the left start
  let i = 0;
  let j = 0;
  let k = l;
  // while these indexes are still in bounds go through the arrays and pull out the smaller of the 2 elements
  while (i < n1 && j < n2) {
    // if left is smaller than right, copy over the smaller element
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      // move the pointer
      i += 1;
    } else {
    // if right is smaller than left, copy over the smaller element      
      arr[k] = R[j];
      // move the pointer
      j += 1;
    }
    // increment thr index
    k += 1;
  }

  while (i < n1) {
    // copy from our left temp array into our output array
    arr[k] = L[i];
    i += 1;
    k += 1;
  }

  while (j < n2) {
    // copy from our right temp array into our output array    
    arr[k] = R[j];
    j += 1;
    k += 1;
  }
};
// call merge sort and pass in the array and left and right params. This is recursive 
const mergeSort = (arr, l, r) => {
  // if left start is less than the right end of the array do this logic
  if (l < r) {
    // this will get us the middle of the passed in array
    const m = Math.floor((l + (r - 1)) / 2);
    // this will merge sort the left side to the array to the middle (m)
    mergeSort(arr, l, m);
    // this will merge sort from the middle (m) to the right side of the array
    mergeSort(arr, m + 1, r);
    // this will merge the sorted left and sorted right halves together
    mergeHalves(arr, l, m, r);
  }
};

export { mergeSort, mergeHalves };
