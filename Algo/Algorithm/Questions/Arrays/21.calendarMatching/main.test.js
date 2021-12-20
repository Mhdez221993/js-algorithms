const calendarMatching = require('./main');

describe('calendarMatching', () => {
  it('should return result', () => {
    const test = {
      calendar1: [
        ['9:00', '10:30'],
        ['12:00', '13:00'],
        ['16:00', '18:00'],
      ],
      calendar2: [
        ['10:00', '11:30'],
        ['12:30', '14:30'],
        ['14:30', '15:00'],
        ['16:00', '17:00'],
      ],
      dailyBounds1: ['9:00', '20:00'],
      dailyBounds2: ['10:00', '18:30'],
      meetingDuration: 30,
    };

    const result = [
      ['11:30', '12:00'],
      ['15:00', '16:00'],
      ['18:00', '18:30'],
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["9:00", "10:30"],
        ["12:00", "13:00"],
        ["16:00", "18:00"]
      ],
      "calendar2": [
        ["10:00", "11:30"],
        ["12:30", "14:30"],
        ["14:30", "15:00"],
        ["16:00", "17:00"]
      ],
      "dailyBounds1": ["9:00", "20:00"],
      "dailyBounds2": ["10:00", "18:30"],
      "meetingDuration": 30
    };

    const result = [
      ["11:30", "12:00"],
      ["15:00", "16:00"],
      ["18:00", "18:30"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["9:00", "10:30"],
        ["12:00", "13:00"],
        ["16:00", "18:00"]
      ],
      "calendar2": [
        ["10:00", "11:30"],
        ["12:30", "14:30"],
        ["14:30", "15:00"],
        ["16:00", "17:00"]
      ],
      "dailyBounds1": ["9:00", "20:00"],
      "dailyBounds2": ["10:00", "18:30"],
      "meetingDuration": 45
    };

    const result = [
      ["15:00", "16:00"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["10:00", "10:30"],
        ["10:45", "11:15"],
        ["11:30", "13:00"],
        ["14:15", "16:00"],
        ["16:00", "18:00"]
      ],
      "calendar2": [
        ["10:00", "11:00"],
        ["12:30", "13:30"],
        ["14:30", "15:00"],
        ["16:00", "17:00"]
      ],
      "dailyBounds1": ["9:30", "20:00"],
      "dailyBounds2": ["9:00", "18:30"],
      "meetingDuration": 15
    };

    const result = [
      ["9:30", "10:00"],
      ["11:15", "11:30"],
      ["13:30", "14:15"],
      ["18:00", "18:30"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["10:00", "10:30"],
        ["10:45", "11:15"],
        ["11:30", "13:00"],
        ["14:15", "16:00"],
        ["16:00", "18:00"]
      ],
      "calendar2": [
        ["10:00", "11:00"],
        ["10:30", "20:30"]
      ],
      "dailyBounds1": ["9:30", "20:00"],
      "dailyBounds2": ["9:00", "22:30"],
      "meetingDuration": 60
    };

    const result = [];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["10:00", "10:30"],
        ["10:45", "11:15"],
        ["11:30", "13:00"],
        ["14:15", "16:00"],
        ["16:00", "18:00"]
      ],
      "calendar2": [
        ["10:00", "11:00"],
        ["10:30", "16:30"]
      ],
      "dailyBounds1": ["9:30", "20:00"],
      "dailyBounds2": ["9:00", "22:30"],
      "meetingDuration": 60
    };

    const result = [
      ["18:00", "20:00"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [],
      "calendar2": [],
      "dailyBounds1": ["9:30", "20:00"],
      "dailyBounds2": ["9:00", "16:30"],
      "meetingDuration": 60
    };

    const result = [
      ["9:30", "16:30"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [],
      "calendar2": [],
      "dailyBounds1": ["9:00", "16:30"],
      "dailyBounds2": ["9:30", "20:00"],
      "meetingDuration": 60
    };

    const result = [
      ["9:30", "16:30"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [],
      "calendar2": [],
      "dailyBounds1": ["9:30", "16:30"],
      "dailyBounds2": ["9:30", "16:30"],
      "meetingDuration": 60
    };

    const result = [
      ["9:30", "16:30"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });

  it('should return result', () => {
    const test = {
      "calendar1": [
        ["7:00", "7:45"],
        ["8:15", "8:30"],
        ["9:00", "10:30"],
        ["12:00", "14:00"],
        ["14:00", "15:00"],
        ["15:15", "15:30"],
        ["16:30", "18:30"],
        ["20:00", "21:00"]
      ],
      "calendar2": [
        ["9:00", "10:00"],
        ["11:15", "11:30"],
        ["11:45", "17:00"],
        ["17:30", "19:00"],
        ["20:00", "22:15"]
      ],
      "dailyBounds1": ["6:30", "22:00"],
      "dailyBounds2": ["8:00", "22:30"],
      "meetingDuration": 30
    };

    const result = [
      ["8:30", "9:00"],
      ["10:30", "11:15"],
      ["19:00", "20:00"]
    ];
    expect(
      calendarMatching(
        test.calendar1,
        test.dailyBounds1,
        test.calendar2,
        test.dailyBounds2,
        test.meetingDuration,
      ),
    ).toStrictEqual(result);
  });
});
