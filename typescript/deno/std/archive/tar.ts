import { Tar } from "https://deno.land/std@0.83.0/archive/tar.ts";

const tar = new Tar();
const content = new TextEncoder().encode("content for the deno.txt file");

await tar.append("deno.txt", {
  reader: new Deno.Buffer(content),
  contentSize: content.byteLength,
});

// Or specifying a filePath.
await tar.append("land.txt", {
  filePath: "./land.txt",
});

const writer = await Deno.open("./out.tar", { write: true, create: true });
await Deno.copy(tar.getReader(), writer);
writer.close();