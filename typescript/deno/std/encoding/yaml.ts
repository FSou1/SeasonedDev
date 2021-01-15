import {
  parse,
  stringify,
} from "https://deno.land/std@0.83.0/encoding/yaml.ts";

const data = parse(`
  foo: bar
  baz:
    - qux
    - quux
  `);
console.log(data);
// => { foo: "bar", baz: [ "qux", "quux" ] }

const yaml = stringify({ foo: "bar", baz: ["qux", "quux"] });
console.log(yaml);
// =>
// foo: bar
// baz:
//   - qux
//   - quux
