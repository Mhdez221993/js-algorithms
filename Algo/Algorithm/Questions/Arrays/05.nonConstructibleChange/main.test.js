const nonConstructibleChange = require('./main');

describe('nonConstructibleChange', () => {
  it('should return true', () => {
    const test = {
      coins: [5, 7, 1, 1, 2, 3, 22],
    };
    const minimunChange = 20;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [1, 1, 1, 1, 1],
    };
    const minimunChange = 6;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
    };
    const minimunChange = 55;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [6, 4, 5, 1, 1, 8, 9],
    };
    const minimunChange = 3;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [],
    };
    const minimunChange = 1;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [87],
    };
    const minimunChange = 1;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [5, 6, 1, 1, 2, 3, 4, 9],
    };
    const minimunChange = 32;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [5, 6, 1, 1, 2, 3, 43],
    };
    const minimunChange = 19;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [1, 1],
    };
    const minimunChange = 3;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [2],
    };
    const minimunChange = 1;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [1],
    };
    const minimunChange = 2;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4],
    };
    const minimunChange = 87;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });

  it('should return true', () => {
    const test = {
      coins: [1, 2, 3, 4, 5, 6, 7],
    };
    const minimunChange = 29;
    expect(nonConstructibleChange(test.coins)).toBe(minimunChange);
  });
});