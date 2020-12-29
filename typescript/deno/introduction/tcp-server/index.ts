const listener = Deno.listen({ port: 8080 });
console.log("listening to 0.0.0.0:8080");
for await (const conn of listener) {
    Deno.copy(conn, conn);
}