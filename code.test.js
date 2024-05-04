const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph1 = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

// Unit testing
assert.deepStrictEqual(hasCycle(graph1), true); 
