const { isOpenOn, nextOpeningDate } = require('../models/openingHours');

exports.isOpen = (request, result) => {
    // Use the provided date if available, otherwise use the current date
    const { date } = request.query;
    const requestDate = date ? new Date(date) : new Date();

    result.json({ isOpen: isOpenOn(requestDate) });
};

exports.nextOpenDate = (request, result) => {
    // Use the provided date if available, otherwise use the current date
    const { date } = request.query;
    const requestDate = date ? new Date(date) : new Date();

    result.json({ nextOpenDate: nextOpeningDate(requestDate) });
};