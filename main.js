/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

const getPlural = (txt, val) => (val > 1 ? `${txt}s` : txt);
const monthDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function outputDate([startDate, endDate]) {
  startDate = new Date(startDate.split(".").reverse());
  endDate = new Date(endDate.split(".").reverse());

  let year = endDate.getYear() - startDate.getYear();
  let month = endDate.getMonth() - startDate.getMonth();
  if (month < 0) {
    month = endDate.getMonth() + 12 - startDate.getMonth();
    year -= 1;
  }
  let day = endDate.getDate() - startDate.getDate();
  if (day < 0) {
    const monthNumber = startDate.getMonth();
    const fullDate = monthDates[monthNumber];
    day = endDate.getDate() + fullDate - startDate.getDate();
    month -= 1;
  }

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const days = Math.round(
    (endDate.getTime() - startDate.getTime()) / MS_PER_DAY
  );

  let returnValue = "";
  if (year > 0) returnValue = `${year} ${getPlural("year", year)}, `;
  if (month > 0) returnValue += `${month} ${getPlural("month", month)}, `;
  returnValue += `total ${days} days`;

  return returnValue;
}

dates.map(outputDate);
