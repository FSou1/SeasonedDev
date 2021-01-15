import { repeat } from "https://deno.land/std@0.83.0/bytes/mod.ts";

repeat(new Uint8Array([1]), 3); // returns Uint8Array(3) [ 1, 1, 1 ]