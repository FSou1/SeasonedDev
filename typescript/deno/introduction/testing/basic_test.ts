import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.82.0/testing/asserts.ts";

Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
  assertArrayIncludes([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
});

Deno.test({ name: "test", fn: () => {} });
Deno.test({ name: "test-1", fn: () => {} });
Deno.test({ name: "test-2", fn: () => {} });
