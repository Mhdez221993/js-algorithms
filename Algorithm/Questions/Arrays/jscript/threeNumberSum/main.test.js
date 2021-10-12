const threeNumberSum = require('./main');

describe('threeNumberSum', () => {
  it('should return true', () => {
    const test = {
      "array": [12, 3, 1, 2, -6, 5, -8, 6],
      "targetSum": 0
    };
    let result = 20
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 1, 1, 1, 1]
    };
    let result = 6
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]
    };
    let result = 55
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [6, 4, 5, 1, 1, 8, 9]
    };
    let result = 3
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": []
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [87]
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [5, 6, 1, 1, 2, 3, 4, 9]
    };
    let result = 32
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [5, 6, 1, 1, 2, 3, 43]
    };
    let result = 19
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 1]
    };
    let result = 3
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [2]
    };
    let result = 1
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [1]
    };
    let result = 2
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
    };
    let result = 87
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 2, 3, 4, 5, 6, 7]
    };
    let result = 29
    expect(threeNumberSum(test.array, test.targetSum)).toBe(result);
  });
});