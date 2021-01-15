import { endsWith } from "https://deno.land/std@0.83.0/bytes/mod.ts";

endsWith(new Uint8Array([0, 1, 2]), new Uint8Array([0, 1])); // returns false
endsWith(new Uint8Array([0, 1, 2]), new Uint8Array([1, 2])); // returns true