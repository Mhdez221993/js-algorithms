const nonConstructibleChange = require('./main');

describe('nonConstructibleChange', () => {
  it('should return true', () => {
    const test = {
      "coins": [5, 7, 1, 1, 2, 3, 22]
    };
    let minimunChange = 20
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 1, 1, 1, 1]
    };
    let minimunChange = 6
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]
    };
    let minimunChange = 55
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [6, 4, 5, 1, 1, 8, 9]
    };
    let minimunChange = 3
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": []
    };
    let minimunChange = 1
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [87]
    };
    let minimunChange = 1
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [5, 6, 1, 1, 2, 3, 4, 9]
    };
    let minimunChange = 32
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [5, 6, 1, 1, 2, 3, 43]
    };
    let minimunChange = 19
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 1]
    };
    let minimunChange = 3
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [2]
    };
    let minimunChange = 1
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [1]
    };
    let minimunChange = 2
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
    };
    let minimunChange = 87
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      "coins": [1, 2, 3, 4, 5, 6, 7]
    };
    let minimunChange = 29
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });
});