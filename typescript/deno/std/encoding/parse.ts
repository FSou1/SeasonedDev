import { parse } from "https://deno.land/std@0.83.0/encoding/csv.ts";
const string = "a,b,c\nd,e,f";

console.log(
  await parse(string, {
    skipFirstRow: false,
  }),
);
// output:
// [["a", "b", "c"], ["d", "e", "f"]]