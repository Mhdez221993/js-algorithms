const moveElementToEnd = require('./main');

describe('moveElementToEnd', () => {
  it('should return result', () => {
    const test = {
      "array": [2, 1, 2, 2, 2, 3, 4, 2],
      "toMove": 2
    };
    let result = [28, 26]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [],
      "toMove": 3
    };
    let result = [20, 17]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 4, 5, 6],
      "toMove": 3
    };
    let result = [25, 1005]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "array": [3, 3, 3, 3, 3],
      "toMove": 3
    };
    let result = [25, 1005]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test ={
      "array": [3, 1, 2, 4, 5],
      "toMove": 3
    };
    let result = [2000, 1032]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 4, 5, 3],
      "toMove": 3
    };
    let result = [954, 954]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 5],
      "toMove": 3
    };
    let result = [20, 21]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [2, 4, 2, 5, 6, 2, 2],
      "toMove": 2
    };
    let result = [1000, 1014]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
      "toMove": 5
    };
    let result = [-123, -124]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
      "toMove": 5
    };
    let result = [530, 530]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "array": [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
      "toMove": 5
    };
    let result = [530, 530]
    expect(moveElementToEnd(test.array, test.toMove)).toStrictEqual(result);
  });
});