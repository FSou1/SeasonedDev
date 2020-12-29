# Testing

The common naming convention for files with tests is `*_test.ts` (or `*_test.js` accordingly).

## Run all tests in the current directory and all sub-directories:

`deno test`

## Run all tests in the util directory

`deno test util/`

## Run just my_test.ts

`deno test basic_test.ts`

## Run tests that contain the word "test"

`deno test --filter "test"`

Output:

```
running 3 tests
test test ... ok (1ms)
test test-1 ... ok (1ms)
test test-2 ... ok (1ms)
```

## Run tests that contain the word "test" with a digit

`deno test --filter "/test-*\d/"`

Output:

```
running 2 tests
test test-1 ... ok (1ms)
test test-2 ... ok (0ms)
```

## Only run these tests

The `only` property (like `fit`) allows you to run a specific test:

```ts
Deno.test({
    name: "run this only",
    only: true,
    fn: () => {}
});
```

Output:

```
test run this only ... ok (2ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (7ms)

FAILED because the "only" option was used
```

## Fail fast

If you wish to stop your test suite on the first failure, use the `--fail-fast` flag:

Try it out:

`deno test --fail-fast`

