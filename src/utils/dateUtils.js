/**
 * Returns the abbreviated english name of the day corresponding to the provided date.
 * @param {Date} date The date for which to retrieve the day of the week.
 * @returns {string} The abbreviated name of the day of the week (e.g., "Mon").
 */
function getDay(date) {
    return date.toLocaleString('en', { weekday: 'short' });
}

/**
 * Returns the time portion of the given date.
 * @param {Date} date The date from which to extract the time.
 * @returns {string} The time portion of the date in "hh:mm" format (24-hour format).
 */
function getTime(date) {
    return date.toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false });
}

module.exports = { getDay, getTime };