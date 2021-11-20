const subarraySort = require('./main');

describe('subarraySort', () => {
  it('should return result', () => {
    const test = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19],
    };
    const result = [3, 9];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [
        [1, 2],
        [4, 3],
      ],
    };
    const result = [-1, -1];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 1],
    };
    const result = [0, 1];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19],
    };
    const result = [4, 9];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 8, 4, 5],
    };
    const result = [2, 4];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19],
    };
    const result = [4, 6];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    };
    const result = [0, 12];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    };
    const result = [0, 11];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
    };
    const result = [1, 11];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
    };
    const result = [1, 12];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11],
    };
    const result = [6, 7];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19],
    };
    const result = [6, 16];
    expect(subarraySort(test.array)).toStrictEqual(result);
  });
});