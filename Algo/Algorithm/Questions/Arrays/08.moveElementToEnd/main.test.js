const moveElementToEnd = require('./main');

describe('moveElementToEnd', () => {
  it('should return result', () => {
    const test = {
      array: [2, 1, 2, 2, 2, 3, 4, 2],
      toMove: 2,
    };
    const result = [4, 1, 3, 2, 2, 2, 2, 2];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [],
      toMove: 3,
    };
    const result = [];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 4, 5, 6],
      toMove: 3,
    };
    const result = [1, 2, 4, 5, 6];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [3, 3, 3, 3, 3],
      toMove: 3,
    };
    const result = [3, 3, 3, 3, 3];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [3, 1, 2, 4, 5],
      toMove: 3,
    };
    const result = [5, 1, 2, 4, 3];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 4, 5, 3],
      toMove: 3,
    };
    const result = [1, 2, 4, 5, 3];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 3, 4, 5],
      toMove: 3,
    };
    const result = [1, 2, 5, 4, 3];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [2, 4, 2, 5, 6, 2, 2],
      toMove: 2,
    };
    const result = [6, 4, 5, 2, 2, 2, 2];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
      toMove: 5,
    };
    const result = [12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
      toMove: 5,
    };
    const result = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
      toMove: 5,
    };
    const result = [12, 1, 2, 11, 10, 3, 4, 6, 7, 9, 8, 5, 5, 5, 5, 5, 5];
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });
});