const sortedSquaredArray = require('./main');

describe('sortedSquaredArray', () => {
  it('should return newArr', () => {
    const test = {
      "array": [1, 2, 3, 5, 6, 8, 9]
    };
    const newArr = [1, 4, 9, 25, 36, 64, 81]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test = {
      "array": [1]
    }
    const newArr = [1]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [1, 2]
    }
    const newArr = [1, 4]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-10, -5, 0, 5, 10]
    }
    const newArr = [0, 25, 25, 100, 100]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [0]
    }
    const newArr = [0]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-2, -1]
    }
    const newArr = [1, 4]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-7, -3, 1, 9, 22, 30]
    }
    const newArr = [1, 9, 49, 81, 484, 900]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
    }
    const newArr = [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    const newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-3, -2, -1]
    }
    const newArr = [1, 4, 9]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })
});