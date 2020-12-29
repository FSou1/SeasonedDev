// deno run --unstable --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.revoke(desc)); // Insufficient.
// PermissionStatus { state: "granted" }

const strongDesc = { name: "read", path: "/foo" } as const;
await Deno.permissions.revoke(strongDesc); // Good.

console.log(await Deno.permissions.query(desc));
// PermissionStatus { state: "prompt" }