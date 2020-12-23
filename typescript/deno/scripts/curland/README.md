# Run

Try it out:

`deno run index.ts https://google.com`

You will see this program returns an error regarding network access:

`error: Uncaught (in promise) PermissionDenied: network access to "https://google.com/", run again with the --allow-net flag`

# Error

So what did we do wrong?

Deno is a runtime which is secure by default. This means you need to explicitly give programs the permission to do certain 'privileged' actions, such as access the network.

# Solution

Try it out again with the correct permission flag:

`deno run --allow-net index.ts https://google.com`