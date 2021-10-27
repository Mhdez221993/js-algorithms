const firstDuplicateValue = require('./main');

describe('firstDuplicateValue', () => {
  it('should return result', () => {
    const test = {
      "array": [2, 1, 5, 2, 3, 3, 4]
    }
    let result = 2
    expect(firstDuplicateValue(test.array)).toStrictEqual(result);
  });

//   it('should return result', () => {
//     const test = {
//       "array": []
//     };
//     let result = 0
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 3, 2]
//     };
//     let result = 3
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array":[1, 2, 3, 4, 5, 1]
//     }
//     let result = 6
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [5, 4, 3, 2, 1, 2, 1]
//     };
//     let result = 3
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array":[5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10]
//     };
//     let result = 5
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [5, 4, 3, 2, 1, 2, 10, 12]
//     };
//     let result = 0
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 2, 3, 4, 5, 6, 10, 100, 1000]
//     };
//     let result = 0
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 2, 3, 3, 2, 1]
//     };
//     let result = 0
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 1, 3, 2, 1]
//     };
//     let result = 4
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 2, 3, 2, 1, 1]
//     };
//     let result = 5
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });

//   it('should return result', () => {
//     const test = {
//       "array": [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
//     };
//     let result = 9
//     expect(firstDuplicateValue(test.array)).toStrictEqual(result);
//   });
});