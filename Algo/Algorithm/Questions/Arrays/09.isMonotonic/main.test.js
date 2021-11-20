const isMonotonic = require('./main');

describe('isMonotonic', () => {
  it('should return result', () => {
    const test = {
      array: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 1],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 5, 10, 1100, 1101, 1102, 9001],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-1, -5, -10, -1100, -1101, -1102, -9001],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-1, -5, -10, -1100, -900, -1101, -1102, -9001],
    };
    const result = false;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 0],
    };
    const result = false;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11],
    };
    const result = false;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11],
    };
    const result = true;
    expect(isMonotonic(test.array)).toStrictEqual(result);
  });
});