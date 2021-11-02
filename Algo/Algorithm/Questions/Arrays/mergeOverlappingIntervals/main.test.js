const mergeOverlappingIntervals = require('./main');

describe('mergeOverlappingIntervals', () => {
  it('should return result', () => {
    const test = {
      "intervals": [
        [1, 2],
        [3, 5],
        [4, 7],
        [6, 8],
        [9, 10]
      ]
    }
    let result = [
      [1, 2],
      [3, 8],
      [9, 10]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [1, 3],
        [2, 8],
        [9, 10]
      ]
    };
    let result = [
      [1, 8],
      [9, 10]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [1, 10],
        [10, 20],
        [20, 30],
        [30, 40],
        [40, 50],
        [50, 60],
        [60, 70],
        [70, 80],
        [80, 90],
        [90, 100]
      ]
    };
    let result = [
      [1, 100]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [1, 10],
        [11, 20],
        [21, 30],
        [31, 40],
        [41, 50],
        [51, 60],
        [61, 70],
        [71, 80],
        [81, 90],
        [91, 100]
      ]
    }
    let result = [
      [1, 10],
      [11, 20],
      [21, 30],
      [31, 40],
      [41, 50],
      [51, 60],
      [61, 70],
      [71, 80],
      [81, 90],
      [91, 100]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [100, 105],
        [1, 104]
      ]
    };
    let result = [
      [1, 105]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [89, 90],
        [-10, 20],
        [-50, 0],
        [70, 90],
        [90, 91],
        [90, 95]
      ]
    };
    let result = [
      [-50, 20],
      [70, 95]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [-5, -4],
        [-4, -3],
        [-3, -2],
        [-2, -1],
        [-1, 0]
      ]
    };
    let result = [
      [-5, 0]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [43, 49],
        [9, 12],
        [12, 54],
        [45, 90],
        [91, 93]
      ]
    };
    let result = [
      [9, 90],
      [91, 93]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    };
    let result = [
      [0, 0]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 1]
      ]
    };
    let result = [
      [0, 1]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [1, 22],
        [-20, 30]
      ]
    };
    let result = [
      [-20, 30]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "intervals": [
        [20, 21],
        [22, 23],
        [0, 1],
        [3, 4],
        [23, 24],
        [25, 27],
        [5, 6],
        [7, 19]
      ]
    };
    let result = [
      [0, 1],
      [3, 4],
      [5, 6],
      [7, 19],
      [20, 21],
      [22, 24],
      [25, 27]
    ]
    expect(mergeOverlappingIntervals(test.intervals)).toStrictEqual(result);
  });
});