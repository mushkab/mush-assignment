const miners = require('../miners');

const { getMonthRevenueInRange, getUnreservedCapacityInRange } = miners;

test('revenue is full monthly price', () => {
    expect(getMonthRevenueInRange('2014-12', 1700, '2014-10-2')).toBe(1700);
});

test('revenue is partial monthly price and not integer', () => {
    const revenue = getMonthRevenueInRange('2014-12', 1700, '2014-10-2', '2014-12-10');
    expect(Number(revenue.toFixed(2))).toBe(548.39);
});

test('revenue is zero', () => {
    const revenue = getMonthRevenueInRange('2014-12', 1700, '2015-10-2', '2016-12-10');
    expect(revenue).toBe(0);
});


test('not reserved for date, should return capacity', () => {
    const revenue = getUnreservedCapacityInRange('2014-12', 5, '2015-10-2', '2016-12-10');
    expect(revenue).toBe(5);
});

test('reserved for date, should return zero', () => {
    const revenue = getUnreservedCapacityInRange('2014-12', 5, '2013-10-2', '2016-12-10');
    expect(revenue).toBe(0);
});
