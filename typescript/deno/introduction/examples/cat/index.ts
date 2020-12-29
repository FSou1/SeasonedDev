import { exists } from "https://deno.land/std/fs/mod.ts";

const filenames = Deno.args;
for (const name of filenames) {
  const file = await readFileStd(name);
  if (file) {
    await Deno.copy(file, Deno.stdout);
    file.close();
  }
}

/**
 * Read a file with a standard Deno API and suppress the NotFound exception
 * @param  {string} filename
 * @returns Promise
 */
async function readFile(filename: string): Promise<Deno.File | null> {
  return Deno.open(filename, { read: true }).catch((err) => {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }

    throw err;
  });
}

/**
 * Read a file with the std/fs module and suppress the NotFound exception
 * Note: The --unstable flag is required
 * @param  {string} filename
 * @returns Promise
 */
async function readFileStd(filename: string): Promise<Deno.File | null> {
  if (!await exists(filename)) {
    return null;
  }

  return Deno.open(filename, { read: true });
}
