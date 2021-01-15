import { copy } from "https://deno.land/std@0.83.0/bytes/mod.ts";

const dest = new Uint8Array(4);
const src = Uint8Array.of(1, 2, 3, 4);
const len = copy(src, dest); // returns len = 4