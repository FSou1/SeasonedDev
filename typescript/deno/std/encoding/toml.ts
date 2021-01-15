import {
    parse,
    stringify,
  } from "https://deno.land/std@0.83.0/encoding/toml.ts";
  const obj = {
    bin: [
      { name: "deno", path: "cli/main.rs" },
      { name: "deno_core", path: "src/foo.rs" },
    ],
    nib: [{ name: "node", path: "not_found" }],
  };
  const tomlString = stringify(obj);
  console.log(tomlString);
  
  // =>
  // [[bin]]
  // name = "deno"
  // path = "cli/main.rs"
  
  // [[bin]]
  // name = "deno_core"
  // path = "src/foo.rs"
  
  // [[nib]]
  // name = "node"
  // path = "not_found"
  
  const tomlObject = parse(tomlString);
  console.log(tomlObject);
  
  // =>
  // {
  //     bin: [
  //       { name: "deno", path: "cli/main.rs" },
  //       { name: "deno_core", path: "src/foo.rs" }
  //     ],
  //     nib: [ { name: "node", path: "not_found" } ]
  //   }