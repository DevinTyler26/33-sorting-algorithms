'use strict';

import { countSort } from '../lib/countSort';

describe('countSort Tests', () => {
  test('Test count sort of an array', () => {
    const arr = [1, 0, 4, 3, 9, 8, 12];
    countSort(arr);
    expect(countSort.places).toEqual([0, 1, 3, 4, 8, 9, 12]);
  });
  test('Test count sort of an array2', () => {
    const arr = [1, 3, 4, 2, 3, 40, 13];
    countSort(arr);
    expect(countSort.places).toEqual([1, 2, 3, 3, 4, 13, 40]);
  });
  test('Test count sort of an array3', () => {
    const arr = [12, 0, 2, 3, 1, 15, 15];
    countSort(arr);
    expect(countSort.places).toEqual([0, 1, 2, 3, 12, 15, 15]);
  });
});
