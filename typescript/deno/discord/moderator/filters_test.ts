import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";

import { capitalsExceeded, hasBlacklistedWords } from "./filters.ts";

Deno.test("Test isUpperCase > false", () => {
  assertEquals(capitalsExceeded("a", 0.6), false);
  assertEquals(capitalsExceeded("abfdb nsdjkfsdf njksdf", 0.6), false);
  assertEquals(capitalsExceeded("abcdeFGHIJ", 0.6), false);
});

Deno.test("Test isUpperCase > true", () => {
  assertEquals(capitalsExceeded("A", 0.6), true);
  assertEquals(capitalsExceeded("ABFDB NSDJKFSDF NJKSDF", 0.6), true);
  assertEquals(capitalsExceeded("abcdEFGHIJ", 0.6), true);
});

Deno.test("Test hasBlacklistedWords > false", () => {
  assertEquals(hasBlacklistedWords("Hello, world"), false);
});

Deno.test("Test hasBlacklistedWords > true", () => {
  assertEquals(hasBlacklistedWords("Youbastard"), true);
  assertEquals(hasBlacklistedWords("Fckingwhore"), true);
});
