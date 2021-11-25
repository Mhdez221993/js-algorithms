const apartmentHunting = require('./main');

describe('apartmentHunting', () => {
  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": false,
          "school": true,
          "store": false
        },
        {
          "gym": true,
          "school": false,
          "store": false
        },
        {
          "gym": true,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "school": true,
          "store": true
        }
      ],
      "reqs": ["gym", "school", "store"]
    }
    const result = 3
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": false,
          "office": true,
          "school": true,
          "store": false
        },
        {
          "gym": true,
          "office": false,
          "school": false,
          "store": false
        },
        {
          "gym": true,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "school": true,
          "store": true
        }
      ],
      "reqs": ["gym", "office", "school", "store"]
    }
    const result = 2;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": false,
          "office": true,
          "school": true,
          "store": false
        },
        {
          "gym": true,
          "office": false,
          "school": false,
          "store": false
        },
        {
          "gym": true,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "school": true,
          "store": true
        }
      ],
      "reqs": ["gym", "office", "school", "store"]
    }
    const result = 2;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "foo": true,
          "gym": false,
          "kappa": false,
          "office": true,
          "school": true,
          "store": false
        },
        {
          "foo": true,
          "gym": true,
          "kappa": false,
          "office": false,
          "school": false,
          "store": false
        },
        {
          "foo": true,
          "gym": true,
          "kappa": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "foo": true,
          "gym": false,
          "kappa": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "foo": true,
          "gym": true,
          "kappa": false,
          "office": false,
          "school": true,
          "store": false
        },
        {
          "foo": true,
          "gym": false,
          "kappa": false,
          "office": false,
          "school": true,
          "store": true
        }
      ],
      "reqs": ["gym", "school", "store"]
    }
    const result = 4;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": true,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": true
        },
        {
          "gym": true,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "school": true,
          "store": false
        }
      ],
      "reqs": ["gym", "school", "store"]
    }
    const result = 2
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": true,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": true
        },
        {
          "gym": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "pool": true,
          "school": false,
          "store": false
        }
      ],
      "reqs": ["gym", "pool", "school", "store"]
    }
    const result = 7;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": true,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": true
        },
        {
          "gym": true,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        }
      ],
      "reqs": ["gym", "pool", "school", "store"]
    }
    const result = 4
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "blocks": [
        {
          "gym": true,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": true
        },
        {
          "gym": true,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        }
      ],
      "reqs": ["gym", "pool", "school", "store"]
    }
    const result = 4;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  // it('should return result', () => {
  //   const test = {
  //     blocks: [
  //       [1, 3, 4, 10, 11],
  //       [2, 5, 9, 12, 20],
  //       [6, 8, 13, 19, 21],
  //       [7, 14, 18, 22, 27],
  //       [15, 17, 23, 26, 28],
  //       [16, 24, 25, 29, 30],
  //     ],
  //   };
  //   const result = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  //     15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  //   ];
  //   expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  // });

  // it('should return result', () => {
  //   const test = {
  //     blocks: [
  //       [1, 21, -3, 4, 15, 6, -7, 88, 9],
  //       [10, 11, 112, 12, 20, -1, -2, -3, -4],
  //       [6, 8, 113, 19, 21, 0, 0, 0, 0],
  //       [7, 2, 18, 22, -27, 12, 32, -111, 66],
  //       [15, 17, 23, 226, 28, -28, -226, -23, -17],
  //       [16, 24, 27, 299, 30, 29, 32, 31, 88],
  //     ],
  //   };
  //   const result = [
  //     1, 10, 21, -3, 11, 6, 7, 8, 112, 4, 15, 12, 113, 2, 15, 16, 17, 18,
  //     19, 20, 6, -7, -1, 21, 22, 23, 24, 27, 226, -27, 0, -2, 88, 9, -3,
  //     0, 12, 28, 299, 30, -28, 32, 0, -4, 0, -111, -226, 29, 32, -23, 66, -17, 31, 88,
  //   ];
  //   expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  // });
});
