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

  // it('should return result', () => {
  //   const test = {
  //     "array": [5, 4, 3, 2, 1, 2, 10, 12]
  //   };
  //   let result = 0
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 2, 3, 4, 5, 6, 10, 100, 1000]
  //   };
  //   let result = 0
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 2, 3, 3, 2, 1]
  //   };
  //   let result = 0
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 1, 3, 2, 1]
  //   };
  //   let result = 4
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 2, 3, 2, 1, 1]
  //   };
  //   let result = 5
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
  //   };
  //   let result = 9
  //   expect(largestRange(test.array)).toStrictEqual(result);
  // });
});
