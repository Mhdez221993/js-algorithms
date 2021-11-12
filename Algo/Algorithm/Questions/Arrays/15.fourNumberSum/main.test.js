const fourNumberSum = require('./main');

describe('fourNumberSum', () => {
  it('should return result', () => {
    const test = {
      "array": [7, 6, 4, -1, 1, 2],
      "targetSum": 16
    }
    let result = [
      [7, 6, 4, -1],
      [7, 6, 1, 2]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, 6, 7],
      "targetSum": 10
    };
    let result = [
      [1, 2, 3, 4]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      "targetSum": 4
    };
    let result = [
      [-2, -1, 1, 6],
      [-2, 1, 2, 3],
      [-2, -1, 2, 5],
      [-2, -1, 3, 4]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-1, 22, 18, 4, 7, 11, 2, -5, -3],
      "targetSum": 30
    }
    let result = [
      [-1, 22, 7, 2],
      [22, 4, 7, -3],
      [-1, 18, 11, 2],
      [18, 4, 11, -3],
      [22, 11, 2, -5]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5],
      "targetSum": 20
    };
    let result = [
      [-5, 2, 15, 8],
      [-3, 2, -7, 28],
      [-10, -3, 28, 5],
      [-10, 28, -6, 8],
      [-7, 28, -6, 5],
      [-5, 2, 12, 11],
      [-5, 12, 8, 5]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5],
      "targetSum": 100
    };
    let result = []
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5],
      "targetSum": 100
    };
    let result = []
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, -5, 6, -6],
      "targetSum": 5
    };
    let result = [
      [2, 3, 5, -5],
      [4, 1, 5, -5],
      [2, 4, 5, -6],
      [1, 3, -5, 6],
      [2, 3, 6, -6],
      [4, 1, 6, -6]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5, -5, 6, -6],
      "targetSum": 5
    };
    let result = [
      [2, 3, 5, -5],
      [4, 1, 5, -5],
      [2, 4, 5, -6],
      [1, 3, -5, 6],
      [2, 3, 6, -6],
      [4, 1, 6, -6]
    ]
    expect(fourNumberSum(test.array, test.targetSum)).toStrictEqual(result);
  });
});
