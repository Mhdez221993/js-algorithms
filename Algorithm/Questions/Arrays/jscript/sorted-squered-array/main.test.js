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
      "array": [1, 2, 3, 4, 5]
    }
    const newArr = [1, 4, 9, 16, 25]
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
      "array": [-3, -2, -1]
    }
    const newArr = [1, 4, 9]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })

  it('should return newArr', () => {
    const test ={
      "array": [-1, -1, 2, 3, 3, 3, 4]
    }
    const newArr = [1, 1, 4, 9, 9, 9, 16]
    expect(sortedSquaredArray(test['array'])).toStrictEqual(newArr);
  })
});