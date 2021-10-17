const isMonotonic = require('./main');

describe('isMonotonic', () => {
  it('should return result', () => {
    const test = {
      "array": [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": []
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [2, 1]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 5, 10, 1100, 1101, 1102, 9001]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-1, -5, -10, -1100, -1101, -1102, -9001]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [-1, -5, -10, -1100, -900, -1101, -1102, -9001]
    };
    let result = false
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 0]
    };
    let result = false
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]
    };
    let result = false
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]
    };
    let result = true
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });
});