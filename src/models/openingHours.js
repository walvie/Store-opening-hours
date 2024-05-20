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

module.exports = { isOpenOn };