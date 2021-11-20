const arrayOfProducts = require('./main');

describe('arrayOfProducts', () => {
  it('should return result', () => {
    const test = {
      array: [5, 1, 4, 2],
    };
    const result = [8, 40, 10, 20];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 8, 6, 2, 4],
    };
    const result = [384, 48, 64, 192, 96];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-5, 2, -4, 14, -6],
    };
    const result = [672, -1680, 840, -240, 560];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [9, 3, 2, 1, 9, 5, 3, 2],
    };
    const result = [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [4, 4],
    };
    const result = [4, 4];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [0, 0, 0, 0],
    };
    const result = [0, 0, 0, 0];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [1, 1, 1, 1],
    };
    const result = [1, 1, 1, 1];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [-1, -1, -1, -1],
    };
    const result = [-1, -1, -1, -1];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    const result = [362880, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(arrayOfProducts(test.array)).toStrictEqual(result);
  });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 2, 3, 2, 1, 1]
  //   };
  //   let result = 5
  //   expect(arrayOfProducts(test.array)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     "array": [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
  //   };
  //   let result = 9
  //   expect(arrayOfProducts(test.array)).toStrictEqual(result);
  // });
});