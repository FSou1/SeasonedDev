import { indexOf } from "https://deno.land/std@0.83.0/bytes/mod.ts";

console.log(
  indexOf(
    new Uint8Array([1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 3]),
    new Uint8Array([0, 1, 2]),
  ), // => returns 2
);

console.log(
  indexOf(
    new Uint8Array([1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 3]),
    new Uint8Array([0, 1, 2]),
    3,
  ), // => returns 5
);
