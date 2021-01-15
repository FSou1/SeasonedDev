import { toIMF } from "https://deno.land/std@0.83.0/datetime/mod.ts";

toIMF(new Date(0)); // => returns "Thu, 01 Jan 1970 00:00:00 GMT"