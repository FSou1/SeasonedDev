const text = Deno.readTextFile("./read.ts");

text.then((response) => console.log(response));