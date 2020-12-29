const write = Deno.writeTextFile("./hello.txt", "Hello World!");

write.then(() => console.log("File written to ./hello.txt"));