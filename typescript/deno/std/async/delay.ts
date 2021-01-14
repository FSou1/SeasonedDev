import { delay } from "https://deno.land/std/async/mod.ts";

// ...
const delayedPromise = delay(1000);

delayedPromise
    .then(() => 'value')
    .then((data) => console.log(data));

const result = await delayedPromise;
