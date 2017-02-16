# ffi-demo
This is a very simple demo for ffi.
- `blocking.js`: It prooved that it is real async for async invocation to shared library.

## Run it
```shell
$ npm install
$ make
$ node blocking.js
```

## Output
```
This is a sync invoke.
Blocked.
Unblocked.
Sync invoke finished.
This is an async invoke.
After async invoke.
Blocked.
Unblocked.
Async invoke finished.
```