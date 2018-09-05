const moment = require('moment');

function getNumberOfMonthDaysInRange(monthAndYear, startDay, endDay) {
    const endOfMonthMoment = moment(monthAndYear).endOf('month');
    const startOfMonthMoment = moment(monthAndYear);
    const startDayMoment =  moment(startDay);

    // if endDay is 'infinite' will get the max relevant date in order to simplify logic
    const endDayMoment =  endDay ? moment(endDay) : moment.max([endOfMonthMoment, startDayMoment]);


    // not in range
    if (endOfMonthMoment < startDayMoment || startOfMonthMoment > endDayMoment) {
        return 0;
    }

    // start day and end day are in the same month and year
    if (startDayMoment.format('YYYY-MM') === endDayMoment.format('YYYY-MM')) {
        return endDayMoment.diff(startDayMoment, 'days') + 1;
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