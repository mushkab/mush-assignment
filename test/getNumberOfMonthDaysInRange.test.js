const getNumberOfMonthDaysInRange = require('../getNumberOfMonthDaysInRange');

test('no end date should return full month', () => {
    expect(getNumberOfMonthDaysInRange('2014-12', '2014-11-02')).toBe(31);
});

test('no end date should return partial month from start date to end of month', () => {
    expect(getNumberOfMonthDaysInRange('2014-11', '2014-11-02')).toBe(29);
});

test('no end date, not in range, should return zero', () => {
    expect(getNumberOfMonthDaysInRange('2014-10', '2014-11-02')).toBe(0);
});

test('in range should return full month', () => {
    expect(getNumberOfMonthDaysInRange('2014-02', '2014-01-02', '2014-03-02')).toBe(28);
});

test('in range should return partial month until end date', () => {
    expect(getNumberOfMonthDaysInRange('2014-02', '2014-01-02', '2014-02-02')).toBe(2);
});

test('in range should return partial month from start date to end of month', () => {
    expect(getNumberOfMonthDaysInRange('2014-01', '2014-01-02', '2014-02-02')).toBe(30);
});

test('not in range should return zero', () => {
    expect(getNumberOfMonthDaysInRange('2014-05', '2014-01-02', '2014-02-02')).toBe(0);
});

test('in range, end date and start date in the same month and year, should return diff', () => {
    expect(getNumberOfMonthDaysInRange('2014-05', '2014-05-02', '2014-05-05')).toBe(4);
});