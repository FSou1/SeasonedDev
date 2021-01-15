import { parse } from "https://deno.land/std@0.83.0/flags/mod.ts";

console.dir(parse(Deno.args));

/*
$ deno run mod.ts -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
*/