/**
 * Created by nicholas on 17-2-16.
 */
const ffi = require('ffi');

const Blocking = ffi.Library('./blocking.so', {
    'BlockAWhile': ['void', []]
});

console.log('This is a sync invoke.');
Blocking.BlockAWhile();
console.log('Sync invoke finished.');

console.log('This is an async invoke.');
Blocking.BlockAWhile.async(function (err) {
    console.log('Async invoke finished.');
});
console.log('After async invoke.');