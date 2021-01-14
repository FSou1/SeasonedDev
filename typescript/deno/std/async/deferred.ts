import { deferred } from "https://deno.land/std/async/mod.ts";

const p = deferred<number>();

p.then((data) => console.log(data));

p.resolve(42);

console.log(await p);