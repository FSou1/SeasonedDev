import { lastIndexOf } from "https://deno.land/std@0.83.0/bytes/mod.ts";

console.log(
  lastIndexOf(
    new Uint8Array([0, 1, 2, 3, 3, 0, 1, 2]),
    new Uint8Array([0, 1, 2]),
  ), // => returns 5
);

console.log(
  lastIndexOf(
    new Uint8Array([0, 1, 2, 3, 3, 0, 1, 2]),
    new Uint8Array([0, 1, 2]),
    3,
  ), // => returns 0
);
