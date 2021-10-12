const threeNumberSum = require('./main');

describe('threeNumberSum', () => {
  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, -8, 6],
      "targetSum": 0
    };
    let result = 0
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3],
      "targetSum": 6
    };
    let result = 0
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3],
      "targetSum": 7
    };
    let result = 55
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [8, 10, -2, 49, 14],
      "targetSum": 57
    };
    let result = 3
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1],
      "targetSum": 0
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
      "targetSum": 0
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
      "targetSum": 0
    };
    let result = 32
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 18
    };
    let result = 19
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 32
    };
    let result = 3
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 33
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      "targetSum": 5
    };
    let result = 2
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });
});