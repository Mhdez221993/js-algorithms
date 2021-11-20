const firstDuplicateValue = require('./main');

describe('firstDuplicateValue', () => {
  it('should return result', () => {
    const test = {
      array: [2, 1, 5, 2, 3, 3, 4],
    };
    const result = 2;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 1, 5, 3, 3, 2, 4],
    };
    const result = 3;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 1, 2, 3, 3, 2, 2],
    };
    const result = 1;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [3, 1, 3, 1, 1, 4, 4],
    };
    const result = 3;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [],
    };
    const result = -1;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1],
    };
    const result = -1;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 1],
    };
    const result = 1;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
    };
    const result = 10;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 1, 1],
    };
    const result = 1;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    };
    const result = 2;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [6, 15, 7, 10, 9, 14, 10, 1, 10, 1, 2, 11, 1, 6, 8],
    };
    const result = 10;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [13, 4, 10, 10, 8, 13, 13, 7, 11, 6, 3, 2, 11],
    };
    const result = 10;
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });
});