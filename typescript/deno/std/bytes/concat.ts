import { concat } from "https://deno.land/std@0.83.0/bytes/mod.ts";

concat(new Uint8Array([1, 2]), new Uint8Array([3, 4])); // returns Uint8Array(4) [ 1, 2, 3, 4 ]

concat(
  new Uint8Array([1, 2]),
  new Uint8Array([3, 4]),
  new Uint8Array([5, 6]),
  new Uint8Array([7, 8]),
); // => returns Uint8Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]