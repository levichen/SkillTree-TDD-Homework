const assert = require('assert');

import GroupPagingService from '../GroupPagingService.js';

let data = [
  {Id:  1, Cost:  1, Revenue: 11, SellPrice: 21},
  {Id:  2, Cost:  2, Revenue: 12, SellPrice: 22},
  {Id:  3, Cost:  3, Revenue: 13, SellPrice: 23},
  {Id:  4, Cost:  4, Revenue: 14, SellPrice: 24},
  {Id:  5, Cost:  5, Revenue: 15, SellPrice: 25},
  {Id:  6, Cost:  6, Revenue: 16, SellPrice: 26},
  {Id:  7, Cost:  7, Revenue: 17, SellPrice: 27},
  {Id:  8, Cost:  8, Revenue: 18, SellPrice: 28},
  {Id:  9, Cost:  9, Revenue: 19, SellPrice: 29},
  {Id: 10, Cost: 10, Revenue: 20, SellPrice: 30},
  {Id: 11, Cost: 11, Revenue: 21, SellPrice: 31},
]

describe('Group Paging Service Tests', function() {
  it('pageSize = 3, fileToSum = `Cost`, Sum should equals [6, 15, 24, 21]', function() {
    // 1. arrange
    let pageSize   = 3;
    let filedToSum = 'Cost';

    let target   = new GroupPagingService(data);
    let expected = [6, 15, 24, 21];

    // 2. act
    let actual = target.getFieldSumOfPaging(pageSize, filedToSum);

    // 3. assert
    assert.deepEqual(actual, expected); 
  });

  it('pageSize = 4, filedToSum = `Revenue`,  Sum should equals [50, 66, 60]', function() {
    // 1. arrange
    let pageSize   = 4;
    let filedToSum = 'Revenue';

    let target   = new GroupPagingService(data);
    let expected = [50, 66, 60];

    // 2. act
    let actual = target.getFieldSumOfPaging(pageSize, filedToSum);

    // 3. assert
    assert.deepEqual(actual, expected); 
  });
});
