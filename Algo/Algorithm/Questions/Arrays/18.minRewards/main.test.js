const minRewards = require('./main');

describe('minRewards', () => {
  it('should return result', () => {
    const test = {
      "scores": [8, 4, 2, 1, 3, 6, 7, 9, 5]
    }
    let result = 25
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [1]
    };
    let result = 1
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [5, 10]
    };
    let result = 3
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [10, 5]
    }
    let result = 3
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "scores": [4, 2, 1, 3]
    }
    let result = 8
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [0, 4, 2, 1, 3]
    }
    let result = 9
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0]
    }
    let result = 52
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "scores": [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
    }
    let result = 15
    expect(minRewards(test.scores)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "scores": [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]
    }
    let result = 93
    expect(minRewards(test.scores)).toStrictEqual(result);
  });
});
