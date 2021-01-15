import { parseAll } from "https://deno.land/std@0.83.0/encoding/yaml.ts";

const data = parseAll(`
---
id: 1
name: Alice
---
id: 2
name: Bob
---
id: 3
name: Eve
`);
console.log(data);
// => [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Eve" } ]