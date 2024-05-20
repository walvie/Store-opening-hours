const { isOpenOn, nextOpeningDate } = require('../src/models/openingHours');

wednesday = '2024-02-21T07:45:00.000'
thursday = '2024-02-22T12:22:11.824'
saturday = '2024-02-24T09:15:00.000'
sunday = '2024-02-25T09:15:00.000'
friday_morning = '2024-02-23T08:00:00.000'
monday_morning = '2024-02-26T08:00:00.000'
thursday_afternoon = '2024-02-22T14:00:00.000'

test('isOpenOn should return correct values', () => {
    expect(isOpenOn(wednesday)).toBe(false);
    expect(isOpenOn(thursday)).toBe(false);
    expect(isOpenOn(saturday)).toBe(false);
});

test('nextOpeningDate should return correct values', () => {
    expect(nextOpeningDate(thursday_afternoon)).toBe(friday_morning);
    expect(nextOpeningDate(saturday)).toBe(monday_morning);
    expect(nextOpeningDate(thursday)).toBe(thursday_afternoon);
});