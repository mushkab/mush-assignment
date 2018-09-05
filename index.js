const csv = require('csvtojson');
const moment = require('moment');
const miners = require('./miners');

async function processCSV(filePath, monthAndYear) {
    if(!moment(monthAndYear).isValid()) {
        throw new Error('Invalid date input should be of format YYYY-MM');
    }

    const rows = await csv().fromFile(filePath);

    let totalCapacity = 0;
    let expectedRevenue = 0;

    rows.forEach((row) => {
        const startDay = row['Start Day'];
        const endDay = row['End Day'];
        const monthlyPrice = parseInt(row['Monthly Price']);
        const capacity = parseInt(row['Capacity']);

        totalCapacity += miners.getUnreservedCapacityInRange(monthAndYear, capacity, startDay, endDay);
        expectedRevenue += miners.getMonthRevenueInRange(monthAndYear, monthlyPrice, startDay, endDay);
    });

    console.log(`${monthAndYear}: expected revenue: $${expectedRevenue.toLocaleString()}, expected total capacity of the unreserved offices: ${totalCapacity}`);

}



const arguments = process.argv.slice(2);

if (arguments.length !== 2) {
    throw new Error('Invalid input');
}

processCSV(arguments[0], arguments[1]);
