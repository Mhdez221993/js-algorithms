const isValidSubsequence = require('./main');

describe('isValidSubsequence', () => {
  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, -1, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 6, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [22, 25, 6],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [1, 6, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [25],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [1, 1, 1, 1, 1],
      sequence: [1, 1, 1],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeFalsy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeFalsy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 23, 6, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeFalsy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeFalsy();
  });

  it('should return true', () => {
    const test = {
      array: [5, 1, 22, 25, 6, -1, 8, 10],
      sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
    };
    expect(isValidSubsequence(test.array, test.sequence)).toBeFalsy();
  });
});