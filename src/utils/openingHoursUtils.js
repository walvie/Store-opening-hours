const fs = require('fs');
const path = require('path');

/**
 * Reads the json file in which the opening hours of the store are located.
 * @returns {Array} The array of the opening hours of the store.
 */
function getOpeningHours() {
    try {
      const filePath = path.join(__dirname, '../data/openingHours.json');
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading opening hours file:', err);
      return [];
    }
}

module.exports = { getOpeningHours };