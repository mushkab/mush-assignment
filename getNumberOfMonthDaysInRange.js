const moment = require('moment');


// endDay default is a reasonable 'infinite' date - this will simplify logic
function getNumberOfMonthDaysInRange(monthAndYear, startDay, endDay = '2999-01-01') {
    const endOfMonthMoment = moment(monthAndYear).endOf('month');
    const startOfMonthMoment = moment(monthAndYear);
    const startDayMoment =  moment(startDay);
    const endDayMoment = moment(endDay);

    // not in range
    if (endOfMonthMoment < startDayMoment || startOfMonthMoment > endDayMoment) {
        return 0;
    }

    // start day and end day are in the same month and year
    if (startDayMoment.format('YYYY-MM') === endDayMoment.format('YYYY-MM')) {
        return moment(endDay).diff(startDayMoment, 'days') + 1;
    }

    // start day and monthAndYear are in the same month and year
    if(startDayMoment.format('YYYY-MM') === monthAndYear) {
        return endOfMonthMoment.diff(startDayMoment, 'days') + 1;
    }

    // end day and monthAndYear are in the same month and year
    if(endDayMoment.format('YYYY-MM') === monthAndYear) {
        return  endDayMoment.diff(startOfMonthMoment, 'days') + 1;
    }

    // full month
    return endOfMonthMoment.daysInMonth();

}

module.exports = getNumberOfMonthDaysInRange;