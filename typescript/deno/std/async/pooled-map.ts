import { pooledMap } from "https://deno.land/std/async/mod.ts";

const results = pooledMap(
  2,
  [1, 2, 3, 4, 5, 6, 7],
  (i) => new Promise((r) => setTimeout(() => r(i), 1000)),
);

for await (const value of results) {
    console.log(value);
}