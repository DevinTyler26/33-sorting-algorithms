'use strict';

import { bubbleSort, bubbleSortReverse } from '../lib/bubbleSort';

describe('bubbleSort Tests', () => {
  test('Test bubble sort of an array', () => {
    const arr = [99, 12, 46, 235, 1, 3];
    bubbleSort(arr);
    expect(arr).toEqual([1, 3, 12, 46, 99, 235]);
  });
  test('Test bubble sort of an array2', () => {
    const arr = [199, 122, 416, 235, 11, 13];
    bubbleSort(arr);
    expect(arr).toEqual([11, 13, 122, 199, 235, 416]);
  });
  test('Test bubble sort of an array3', () => {
    const arr = [929, 212, 426, 25, 5, 9];
    bubbleSort(arr);
    expect(arr).toEqual([5, 9, 25, 212, 426, 929]);
  });

  test('Test reverse bubble sort of an array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    bubbleSortReverse(arr);
    expect(arr).toEqual([6, 5, 4, 3, 2, 1]);
  });

  test('Test reverse bubble sort of an array2', () => {
    const arr = [-1, -12, -46, -235, -1, -3];
    bubbleSortReverse(arr);
    expect(arr).toEqual([-1, -1, -3, -12, -46, -235]);
  });

  test('Test reverse bubble sort of an array3', () => {
    const arr = [129, -12, 146, -235, 1, -3];
    bubbleSortReverse(arr);
    expect(arr).toEqual([146, 129, 1, -3, -12, -235]);
  });
});
