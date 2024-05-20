const openingHours = [
    { days: ["Mon", "Wed", "Fri"], hours: ["08:00", "16:00"] },
    { days: ["Tue", "Thu", "Sat"], hours: ["08:00", "12:00"] },
    { days: ["Tue", "Thu"], hours: ["14:00", "18:00"] }
];

function isOpenOn(date) {
    const day = getDay(date);
    const time = getTime(date);
  
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

function getDay(date) {
    return date.toLocaleString('en', { weekday: 'short' });
}

function getTime(date) {
    return date.toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false });
}

module.exports = { isOpenOn };