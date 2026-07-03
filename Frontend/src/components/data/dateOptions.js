export const days = ["Day", ...Array.from({ length: 31 }, (_, i) => i + 1)];

export const months = [
  "Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [
  "Year",
  ...Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i),
];