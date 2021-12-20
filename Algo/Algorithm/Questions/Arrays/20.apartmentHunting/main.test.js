const apartmentHunting = require('./main');

describe('apartmentHunting', () => {
  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: false,
          school: true,
          store: false,
        },
        {
          gym: true,
          school: false,
          store: false,
        },
        {
          gym: true,
          school: true,
          store: false,
        },
        {
          gym: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          school: true,
          store: true,
        },
      ],
      reqs: ['gym', 'school', 'store'],
    };
    const result = 3;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: false,
          office: true,
          school: true,
          store: false,
        },
        {
          gym: true,
          office: false,
          school: false,
          store: false,
        },
        {
          gym: true,
          office: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          school: true,
          store: true,
        },
      ],
      reqs: ['gym', 'office', 'school', 'store'],
    };
    const result = 2;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: false,
          office: true,
          school: true,
          store: false,
        },
        {
          gym: true,
          office: false,
          school: false,
          store: false,
        },
        {
          gym: true,
          office: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          school: true,
          store: true,
        },
      ],
      reqs: ['gym', 'office', 'school', 'store'],
    };
    const result = 2;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          foo: true,
          gym: false,
          kappa: false,
          office: true,
          school: true,
          store: false,
        },
        {
          foo: true,
          gym: true,
          kappa: false,
          office: false,
          school: false,
          store: false,
        },
        {
          foo: true,
          gym: true,
          kappa: false,
          office: false,
          school: true,
          store: false,
        },
        {
          foo: true,
          gym: false,
          kappa: false,
          office: false,
          school: true,
          store: false,
        },
        {
          foo: true,
          gym: true,
          kappa: false,
          office: false,
          school: true,
          store: false,
        },
        {
          foo: true,
          gym: false,
          kappa: false,
          office: false,
          school: true,
          store: true,
        },
      ],
      reqs: ['gym', 'school', 'store'],
    };
    const result = 4;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: true,
          school: true,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: true,
        },
        {
          gym: true,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          school: true,
          store: false,
        },
      ],
      reqs: ['gym', 'school', 'store'],
    };
    const result = 2;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: true,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: true,
        },
        {
          gym: true,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          pool: true,
          school: false,
          store: false,
        },
      ],
      reqs: ['gym', 'pool', 'school', 'store'],
    };
    const result = 7;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: true,
          office: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: true,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: true,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: true,
        },
        {
          gym: true,
          office: true,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: true,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: true,
          school: false,
          store: false,
        },
      ],
      reqs: ['gym', 'pool', 'school', 'store'],
    };
    const result = 4;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      blocks: [
        {
          gym: true,
          office: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: true,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: true,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: true,
        },
        {
          gym: true,
          office: true,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: true,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: false,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: false,
          school: true,
          store: false,
        },
        {
          gym: false,
          office: false,
          pool: true,
          school: false,
          store: false,
        },
      ],
      reqs: ['gym', 'pool', 'school', 'store'],
    };
    const result = 4;
    expect(apartmentHunting(test.blocks, test.reqs)).toStrictEqual(result);
  });
});
