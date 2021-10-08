const isValidSubsequence = require('./main');

describe('isValidSubsequence', () => {
  it('', () => {
    let test = {
      "array": [5, 1, 22, 25, 6, -1, 8, 10],
      "sequence": [1, 6, -1, 10]
    }
    expect(isValidSubsequence(test.array, test.sequence)).toBeTruthy()
  })
});