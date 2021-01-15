import {
  decode,
  encode,
} from "https://deno.land/std@0.83.0/encoding/base32.ts";

const b32Repr = "RC2E6GA=";

const binaryData = decode(b32Repr);
console.log(binaryData);
// => Uint8Array [ 136, 180, 79, 24 ]

console.log(encode(binaryData));
// => RC2E6GA=
