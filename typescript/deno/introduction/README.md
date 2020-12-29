# Hello world

Deno is a secure runtime for both JavaScript and TypeScript, so the same functionality can be created, and Deno will execute both.

Try it out:

```
deno run hello-world/index.js
deno run hello-world/index.ts
```

# Manage dependencies

* Deno uses URLs for dependency management;
* One convention places all these dependent URLs into a local `deps.ts` file. Functionality is then exported out of `deps.ts` for use by local modules;
* Continuing this convention, dev only dependencies can be kept in a `dev_deps.ts` file.

Try it out:

```
deno run manage-dependencies/index.js
```

# Fetch data

* Like browsers, Deno implements web standard APIs such as fetch;
* Deno is secure by default, meaning explicit permission must be granted to access the network;

Try it out:

```
deno run --allow-net fetch-data/index.ts
```

# Cat

Use the Deno runtime API to output the contents of a file to the console.

Try it out:

```
deno run --allow-read --unstable index.ts file-a.txt file-b.txt file-c.txt
```

# Http web server

Use the std library http module to run your own web server

Try it out:

```
deno run --allow-net http-web-server/index.ts
```

# Tcp server

Listening for TCP port connections with Deno.listen

Try it out:

```
deno run --allow-net tcp-server/index.ts
```

# Watch file system events

Watch for file system events

Try it out:

```
deno run --allow-read watch-file-system/index.ts
```