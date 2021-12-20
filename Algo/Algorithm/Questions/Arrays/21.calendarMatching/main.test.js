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
});
