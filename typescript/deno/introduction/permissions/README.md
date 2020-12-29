# Request permissions

Request an ungranted permission from the user via CLI prompt.

## Run

Try it out:

`deno run --unstable requestPermissions.ts`

You will see:

```
⚠️  Deno requests read access to "/foo". Grant? [g/d (g = grant, d = deny)] g
PermissionStatus { state: "granted" }
```

# Revoke permissions

Downgrade a permission from "granted" to "prompt".

## Run

Try it out:

`deno run --unstable --allow-read=/foo revokePermissions.ts`

You will see:

```
PermissionStatus { state: "granted" }
PermissionStatus { state: "prompt" }
```

# References
* [Deno.land - Request/Revoke permissions](https://deno.land/manual@v1.6.2/runtime/permission_apis#request-permissions)