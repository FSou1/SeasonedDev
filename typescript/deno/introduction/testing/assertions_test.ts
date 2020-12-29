import {
  assert,
  assertArrayIncludes,
  assertEquals,
  assertMatch,
  assertNotEquals,
  assertNotMatch,
  assertStrictEquals,
  assertStringIncludes,
  assertThrows,
  assertThrowsAsync,
} from "https://deno.land/std@0.82.0/testing/asserts.ts";

Deno.test("Test Assert", () => {
  assert(1);
  assert("Hello");
  assert(true);
});

Deno.test("Test Assert Equals", () => {
  assertEquals(1, 1);
  assertEquals("Hello", "Hello");
  assertEquals(true, true);
  assertEquals(undefined, undefined);
  assertEquals(null, null);
  assertEquals(new Date(), new Date());
  assertEquals(new RegExp("abc"), new RegExp("abc"));

  class Foo {}
  const foo1 = new Foo();
  const foo2 = new Foo();

  assertEquals(foo1, foo2);
});

Deno.test("Test Assert Not Equals", () => {
  assertNotEquals(1, 2);
  assertNotEquals("Hello", "World");
  assertNotEquals(true, false);
  assertNotEquals(undefined, "");
  assertNotEquals(new Date(), Date.now());
  assertNotEquals(new RegExp("abc"), new RegExp("def"));
});

Deno.test("Test Assert Strict Equals", () => {
  assertStrictEquals(1, 1);
  assertStrictEquals("Hello", "Hello");
  assertStrictEquals(true, true);
  assertStrictEquals(undefined, undefined);
});

Deno.test("Test Assert String Contains", () => {
  assertStringIncludes("Hello World", "Hello");
});

Deno.test("Test Assert Array Contains", () => {
  assertArrayIncludes([1, 2, 3], [1]);
  assertArrayIncludes([1, 2, 3], [1, 2]);
  assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"));
});

Deno.test("Test Assert Match", () => {
  assertMatch("abcdefghi", new RegExp("def"));

  const basicUrl = new RegExp("^https?://[a-z.]+.com$");
  assertMatch("https://www.google.com", basicUrl);
  assertMatch("http://facebook.com", basicUrl);
});

Deno.test("Test Assert Not Match", () => {
  assertNotMatch("abcdefghi", new RegExp("jkl"));

  const basicUrl = new RegExp("^https?://[a-z.]+.com$");
  assertNotMatch("https://deno.land/", basicUrl);
});

Deno.test("Test Assert Throws", () => {
  assertThrows(
    () => {
      throw new Error("Panic!");
    },
    Error,
    "Panic!",
  );
});

Deno.test("Test Assert Throws Async", () => {
  assertThrowsAsync(
    () => {
      return new Promise(() => {
        throw new Error("Panic! Threw Error");
      });
    },
    Error,
    "Panic! Threw Error",
  );

  assertThrowsAsync(
    () => {
      return Promise.reject(new Error("Panic! Reject Error"));
    },
    Error,
    "Panic! Reject Error",
  );
});

Deno.test("Test Assert Equal Fail Custom Message", () => {
  assertEquals(1, 1, "Values Don't Match!");
});
