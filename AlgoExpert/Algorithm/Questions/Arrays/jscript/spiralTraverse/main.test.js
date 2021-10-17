const spiralTraverse = require('./main');

describe('spiralTraverse', () => {
  it('should return result', () => {
    const test = {
      "array": [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 2],
        [4, 3]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [19, 32, 33, 34, 25, 8],
        [16, 15, 14, 13, 12, 11],
        [18, 31, 36, 35, 26, 9],
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [17, 30, 29, 28, 27, 10]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
        [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [27, 12, 35, 26],
        [25, 21, 94, 11],
        [19, 96, 43, 56],
        [55, 36, 10, 18],
        [96, 83, 31, 94],
        [93, 11, 90, 16]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 2, 3, 4],
        [10, 11, 12, 5],
        [9, 8, 7, 6]
      ]
    };
    let result = false
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7]
      ]
    };
    let result = false
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 11],
        [2, 12],
        [3, 13],
        [4, 14],
        [5, 15],
        [6, 16],
        [7, 17],
        [8, 18],
        [9, 19],
        [10, 20]
      ]
    };
    let result = false
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [
        [1, 3, 2, 5, 4, 7, 6]
      ]
    };
    let result = true
    expect(spiralTraverse(test.array)).toStrictEqual(result);
  });
});