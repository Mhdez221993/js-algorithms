const smallestDifference = require('./main');

describe('smallestDifference', () => {
  it('should return true', () => {
    const test = {
      arrayOne: [-1, 5, 10, 20, 28, 3],
      arrayTwo: [26, 134, 135, 15, 17],
    };
    const result = [28, 26];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [-1, 5, 10, 20, 3],
      arrayTwo: [26, 134, 135, 15, 17],
    };
    const result = [20, 17];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 0, 20, 25],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    const result = [25, 1005];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 0, 20, 25, 2200],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    const result = [25, 1005];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 0, 20, 25, 2000],
      arrayTwo: [1005, 1006, 1014, 1032, 1031],
    };
    const result = [2000, 1032];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [240, 124, 86, 111, 2, 84, 954, 27, 89],
      arrayTwo: [1, 3, 954, 19, 8],
    };
    const result = [954, 954];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [0, 20],
      arrayTwo: [21, -2],
    };
    const result = [20, 21];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 1000],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    const result = [1000, 1014];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    const result = [-123, -124];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });

  it('should return true', () => {
    const test = {
      arrayOne: [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
      arrayTwo: [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
    };
    const result = [530, 530];
    expect(smallestDifference(test.arrayOne, test.arrayTwo)).toStrictEqual(result);
  });
});