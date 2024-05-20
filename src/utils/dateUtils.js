/**
 * Parses the input string as a date and returns the Date object.
 * Throws an error if the input is not a valid date string or cannot be parsed.
 * @param {string} inputDate The string to parse as a date.
 * @returns {Date} The parsed date as a Date object.
 * @throws {Error} If the input is not a valid date string or cannot be parsed.
 */
function getDate(inputDate) {
    let dateObject;
    if (!inputDate || isNaN(new Date(inputDate).getTime())) {
        throw new Error('Invalid date provided');
    }

    try {
        dateObject = new Date(inputDate);
    } catch (error) {
        throw new Error('Error converting date to Date object');
    }

    return dateObject;
}

/**
 * Returns the abbreviated english name of the day corresponding to the provided date.
 * @param {string} inputDate The date for which to retrieve the day of the week.
 * @returns {string} The abbreviated name of the day of the week (e.g., "Mon").
 */
function getDay(inputDate) {
    const dateObject = getDate(inputDate);
    return dateObject.toLocaleString('en', { weekday: 'short' });
}

/**
 * Returns the time portion of the given date.
 * @param {string} inputDate The date from which to extract the time.
 * @returns {string} The time portion of the date in "hh:mm" format (24-hour format).
 */
function getTime(inputDate) {
    const dateObject = getDate(inputDate);
    return dateObject.toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false });
}

/**
 * Formats the given date into a string representation with millisecond precision.
 * @param {Date} date The date object to format.
 * @returns {string} A string representing the date in "YYYY-MM-DDTHH:MM:SS.SSS" format.
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    const millisecond = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}`;
}

module.exports = { getDay, getTime, getDate, formatDate };