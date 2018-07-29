// This sort works well for arrays that dont have a big range of numbers.
// this will work well when numbers are in a small range and need to be stable. If there are (2) 1's, the first 1 will appear first.

const countSort = (arr) => {
  // define an array that will hold the indexes of the passed in array
  const index = [0];
  // fill that array with all zeros, we will change the count later on. The length of this array will be the max number in the array + 1
  // so if 100 is in the array that needs to be sorted, index will be an array of 101 zeros.
  for (let i = 0; i < Math.max(...arr); i++) {
    index.push(0);
  }

  // loop through our array and then increment the index count by 1 for that specific spot. So if we pass in 4, index at index 4 will turn from 0 to 1
  for (let i = 0; i < arr.length; i++) {
    index[arr[i]] += 1;
  }

  // loop through the index and add set that index to its current value plus the value behind it so our index is then sorted
  for (let i = 1; i < index.length; i++) {
    index[i] = index[i] + index[i - 1]; // eslint-disable-line
  }
  // create a places array, this will be our sorted output array
  countSort.places = [];
  // fill it with empty arrays so we can reference the index numbers later
  for (let i = 1; i < arr.length; i++) {
    countSort.places.push([]);
  }
  // loop through our places array and change the values to be the values of the arr that we passed in. I can visualize this a lot better than I can explain it.
  // decrement the count
  for (let i = 0; i < arr.length; i++) {
    countSort.places[index[arr[i]] - 1] = arr[i];
    index[arr[i]] -= 1;
  }
  return countSort.places;
};

export { countSort }; // eslint-disable-line
