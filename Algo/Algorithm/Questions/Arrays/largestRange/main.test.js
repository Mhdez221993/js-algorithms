const largestRange = require('./main');

describe('largestRange', () => {
  it('should return result', () => {
    const test = {
      "array": [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
    }
    let result = [0, 7]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1]
    };
    let result = [1, 1]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2]
    };
    let result = [1, 2]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [4, 2, 1, 3]
    }
    let result = [1, 4]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "array": [4, 2, 1, 3, 6]
    }
    let result = [1, 4]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [8, 4, 2, 10, 3, 6, 7, 9, 1]
    }
    let result = [6, 10]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]
    }
    let result = [10, 19]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]
    }
    let result = [-1, 19]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "array": [0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2]
    }
    let result = [-7, 7]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "array": [-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2]
    }
    let result = [-8, 19]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 1, 1, 3, 4]
    }
    let result = [3, 4]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 1, 1, 3, 4]
    }
    let result = [3, 4]
    expect(largestRange(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-1, 0, 1]
    }
    let result = [-1, 1]
    expect(largestRange(test.array)).toStrictEqual(result);
  });
});
