const twoNumberSum = require('./main');

describe('twoNumberSum', () => {
  it('Should return [11, -1]', () => {
    const test = {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 10,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toEqual([-1, 11]);
  });

  it('Should return [4, 6]', () => {
    const test = {
      array: [4, 6],
      targetSum: 10,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([4, 6]);
  });

  it('Should return [4, 1]', () => {
    const test = {
      array: [4, 6, 1],
      targetSum: 5,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([1, 4]);
  });

  it('Should return [6, -3]', () => {
    const test = {
      array: [4, 6, 1, -3],
      targetSum: 3,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([-3, 6]);
  });

  it('Should return [8, 9]', () => {
    const test = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targetSum: 17,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([8, 9]);
  });

  it('Should return [3, 15]', () => {
    const test = {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 18,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([3, 15]);
  });

  it('Should return [-5, 0]', () => {
    const test = {
      array: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
      targetSum: -5,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([-5, 0]);
  });

  it('Should return [210, -47]', () => {
    const test = {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 163,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([-47, 210]);
  });

  it('Should return []', () => {
    const test = {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 164,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([]);
  });

  it('Should return []', () => {
    const test = {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 15,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([]);
  });

  it('Should return []', () => {
    const test = {
      array: [14],
      targetSum: 15,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([]);
  });

  it('Should return []', () => {
    const test = {
      array: [15],
      targetSum: 15,
    };
    expect(twoNumberSum(test.array, test.targetSum)).toStrictEqual([]);
  });
});