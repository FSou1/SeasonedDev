import {
  decode,
  encode,
} from "https://deno.land/std@0.83.0/encoding/ascii85.ts";

const a85Repr = "LpTqp";

const binaryData = decode(a85Repr);
console.log(binaryData);
// => Uint8Array [ 136, 180, 79, 24 ]

console.log(encode(binaryData));
// => LpTqp
