'use strict';

import { mergeSort } from '../lib/mergeSort';

describe('Merge sort Tests', () => {
  test('Test merge sort of an array', () => {
    const arr = [99, 12, 46, 235, 1, 3];
    const n = arr.length;
    // call merge sort pass in the left and right params. Left starts at 0 and through the right half which goes through n - 1
    mergeSort(arr, 0, n - 1);
    expect(arr).toEqual([1, 3, 12, 46, 99, 235]);
  });
  test('Test merge sort of an array2', () => {
    const arr = [199, 122, 416, 235, 11, 13];
    const n = arr.length;
    mergeSort(arr, 0, n - 1);
    expect(arr).toEqual([11, 13, 122, 199, 235, 416]);
  });
  test('Test merge sort of an array3', () => {
    const arr = [929, 212, 426, 25, 5, 9];
    const n = arr.length;
    mergeSort(arr, 0, n - 1);
    expect(arr).toEqual([5, 9, 25, 212, 426, 929]);
  });
  test('Test merge sort of an  empty array', () => {
    const arr = [];
    const n = arr.length;
    mergeSort(arr, 0, n - 1);
    expect(arr).toEqual([]);
  });
});
