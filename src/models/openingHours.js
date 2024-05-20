const { getDay, getTime } = require('../utils/dateUtils');
const { getOpeningHours } = require('../utils/openingHoursUtils');

/**
 * Returns if the store is open or closed according to the provided date.
 * @param {Date} date The date from which to check the stores hours.
 * @returns {bool} True if the store is open, false if it isn't.
 */
function isOpenOn(date) {
    const day = getDay(date);
    const time = getTime(date);
    const openingHours = getOpeningHours()
  
    for (const entry of openingHours) {
      if (entry.days.includes(day)) {
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
 * @param {Date} date The date from which to start checking the store's next opening date.
 * @returns {string} The ISO string of the next opening date and time.
 */
function nextOpeningDate(date) {
    let nextDate = date;
    const openingHours = getOpeningHours()

    nextDate.setSeconds(0, 0);

    const day = getDay(nextDate);
    const time = getTime(nextDate);

    for (const entry of openingHours) {
        if (entry.days.includes(day)) {
          const [startTime, endTime] = entry.hours;
          if (time >= startTime && time <= endTime) {
            nextDate.setUTCHours(parseInt(endTime.split(':')[0]));
            nextDate.setUTCMinutes(parseInt(endTime.split(':')[1]) + 1);
          }
        }
    }

    while (!isOpenOn(nextDate)) {
        console.log(getDay(nextDate) + ": " + getTime(nextDate));
        nextDate.setMinutes(nextDate.getMinutes() + 1);
    }

    return nextDate;
}

module.exports = { isOpenOn, nextOpeningDate };