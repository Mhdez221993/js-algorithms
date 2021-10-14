const threeNumberSum = require('./main');

describe('threeNumberSum', () => {
  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, -8, 6],
      "targetSum": 0
    };
    let result = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3],
      "targetSum": 6
    };
    let result = [
      [1, 2, 3]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3],
      "targetSum": 7
    };
    let result = []
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [8, 10, -2, 49, 14],
      "targetSum": 57
    };
    let result = [
      [-2, 10, 49]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1],
      "targetSum": 0
    };
    let result = [
      [-8, 3, 5],
      [-6, 1, 5],
      [-1, 0, 1]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
      "targetSum": 0
    };
    let result = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-1, 0, 1]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
      "targetSum": 0
    };
    let result = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-5, -1, 6],
      [-5, 0, 5],
      [-5, 2, 3],
      [-1, 0, 1]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 18
    };
    let result = [
      [1, 2, 15],
      [1, 8, 9],
      [2, 7, 9],
      [3, 6, 9],
      [3, 7, 8],
      [4, 5, 9],
      [4, 6, 8],
      [5, 6, 7]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 32
    };
    let result = [
      [8, 9, 15]
    ]
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 33
    };
    let result = []
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 5
    };
    let result = []
    expect(threeNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });
});