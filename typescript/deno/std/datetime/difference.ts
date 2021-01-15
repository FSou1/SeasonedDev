import { difference } from "https://deno.land/std@0.83.0/datetime/mod.ts";

const date0 = new Date("2018-05-14");
const date1 = new Date("2020-05-13");

difference(date0, date1, { units: ["days", "months", "years"] });
// => returns { days: 730, months: 23, years: 1 }

difference(date0, date1);
// => returns {
//   milliseconds: 63072000000,
//   seconds: 63072000,
//   minutes: 1051200,
//   hours: 17520,
//   days: 730,
//   weeks: 104,
//   months: 23,
//   quarters: 5,
//   years: 1
// }