// @ts-check

/**
 * Calculates the number of days left until the deadline.
 * @param {Date} date
 * @param {Date} deadline
 * @returns {number} number of days left
 */
function getDaysLeft(date, deadline) {
  const milisecondsDifference = deadline - date;
  const daysdifference = milisecondsDifference / (1000 * 60 * 60 * 24);
  return daysdifference;
}

const days = getDaysLeft(new Date('2023-08-16'), new Date('2023-08-21'));

console.log(days);
