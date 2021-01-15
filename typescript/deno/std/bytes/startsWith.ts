import { startsWith } from "https://deno.land/std@0.83.0/bytes/mod.ts";

startsWith(new Uint8Array([0, 1, 2]), new Uint8Array([0, 1])); // returns true
startsWith(new Uint8Array([0, 1, 2]), new Uint8Array([1, 2])); // return false