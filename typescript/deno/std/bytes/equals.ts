import { equals } from "https://deno.land/std@0.83.0/bytes/mod.ts";

console.log(
  equals(new Uint8Array([0, 1, 2, 3]), new Uint8Array([0, 1, 2, 3])), // returns true
);

console.log(
  equals(new Uint8Array([0, 1, 2, 3]), new Uint8Array([0, 1, 2, 4])), // returns false
);
