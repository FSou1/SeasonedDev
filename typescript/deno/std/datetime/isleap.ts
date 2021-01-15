import { isLeap } from "https://deno.land/std@0.83.0/datetime/mod.ts";

isLeap(new Date("1970-01-01")); // => returns false
isLeap(new Date("1972-01-01")); // => returns true
isLeap(new Date("2000-01-01")); // => returns true
isLeap(new Date("2100-01-01")); // => returns false
isLeap(1972); // => returns true