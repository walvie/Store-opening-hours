const { getDay, getTime, getDate, formatDate } = require('../utils/dateUtils');
const { getOpeningHours } = require('../utils/openingHoursUtils');

/**
 * Returns if the store is open or closed according to the provided date.
 * @param {string} date The date from which to check the stores hours.
 * @returns {bool} True if the store is open, false if it isn't.
 */
function isOpenOn(date) {
    const day = getDay(date);
    const time = getTime(date);
    const openingHours = getOpeningHours()
  
    for (const entry of openingHours) {
      if (entry.days.includes(day)) {
        // Check if the provided time falls within the opening hours
        const [startTime, endTime] = entry.hours;
        if (time >= startTime && time <= endTime) {
          return true;
        }
      }
    }
    return false;
}

/**
 * Finds the next date and time when the store will be open starting from the provided date.
 * @param {string} date The date from which to start checking the store's next opening date.
 * @returns {string} The ISO string of the next opening date and time.
 */
function nextOpeningDate(date) {
    let nextDate = getDate(date);

    const openingHours = getOpeningHours()

    nextDate.setSeconds(0, 0);

    const day = getDay(nextDate);
    const time = getTime(nextDate);

    for (const entry of openingHours) {
        if (entry.days.includes(day)) {
            // Check if the provided time falls within the opening hours
            const [startTime, endTime] = entry.hours;
            if (time >= startTime && time <= endTime) {
                // Set the next date to check's time to the end time of the current entry
                nextDate.setHours(parseInt(endTime.split(':')[0]));
                nextDate.setMinutes(parseInt(endTime.split(':')[1]) + 1);
            }
        }
    }

    while (!isOpenOn(nextDate)) {
        nextDate.setMinutes(nextDate.getMinutes() + 1);
    }

    nextDate = formatDate(nextDate)

    return nextDate;
}

module.exports = { isOpenOn, nextOpeningDate };