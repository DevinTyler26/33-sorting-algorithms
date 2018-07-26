// JavaScript way to bubble sort
const bubbleSortReverse = (arr) => {
  // define n as length of array so we can use its value later in the codes for loops
  const n = arr.length;
  // this outer for loop allows us to loop over each element and the inner loops allows us to loop over each element j n-i-1 amount of times. This will taper down to zero by the time the outer loops gets to the last element in the list. It will be sorted by that time so we dont need to do a full pass for the last element
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // if arr at j is less and array at j+1, then swap them.
      if (arr[j] < arr[j + 1]) {
        // set arr at j to temp to save so we can then set arr at j+1 to arr at j then arr at j+1 to arr at j's old value(temp)
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export { bubbleSort, bubbleSortReverse };
