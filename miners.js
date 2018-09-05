const moment = require('moment');
const getNumberOfMonthDaysInRange = require('./getNumberOfMonthDaysInRange');

function getMonthRevenueInRange(monthAndYear, monthlyPrice, startDay, endDay) {
    const days = getNumberOfMonthDaysInRange(monthAndYear, startDay, endDay);
    const pricePerDay = monthlyPrice / moment(monthAndYear).daysInMonth();
    return pricePerDay * days;
}

function getUnreservedCapacityInRange(monthAndYear, capacity, startDay, endDay) {
    const days = getNumberOfMonthDaysInRange(monthAndYear,startDay, endDay);
    return days === 0 ? capacity : 0;
}

module.exports = {
    getMonthRevenueInRange,
    getUnreservedCapacityInRange
};