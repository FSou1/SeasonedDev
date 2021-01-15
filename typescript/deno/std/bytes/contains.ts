import { contains } from "https://deno.land/std@0.83.0/bytes/mod.ts";

contains(
  new Uint8Array([1, 2, 0, 1, 2, 0, 2, 1, 3]),
  new Uint8Array([0, 1, 2]),
); // => returns true

contains(
  new Uint8Array([1, 2, 0, 1, 2, 0, 2, 1, 3]),
  new Uint8Array([2, 2]),
); // => returns false