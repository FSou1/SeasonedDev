Deno aims to use web platform APIs (like fetch) instead of inventing a new proprietary API where it makes sense.

# fetch

## Run

Try it out:

`deno run --allow-net fetch.ts`

You will see:

```
[
  {
    status: { verified: true, sentCount: 1, feedback: "" },
    type: "cat",
    deleted: false,
    ...
  }
  ...
]
```

# CustomEvent, EventTarget and EventListener

## Run

Try it out:

`deno run addEventListener.ts`

You will see:

```
Finished.
On load.
On unload.
```

# Workers

Workers can be used to run code on multiple threads. Each instance of Worker is run on a separate thread, dedicated only to that worker.

## Run

Try it out:

`deno run --allow-read worker/main.ts`

You will see:

```
hello world from worker.ts
```

# References
* [Deno.land - Web Platform APIs](https://deno.land/manual@v1.6.2/runtime/web_platform_apis#web-platform-apis)