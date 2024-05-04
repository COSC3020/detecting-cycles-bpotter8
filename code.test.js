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

const graph2 = {
    0: [1, 2],
    1: [2],
    2: [3],
    3: []
};

const graph3 = {
    0: [1, 2, 3],
    1: [2],
    2: [0, 1]
};

const graph4 = {
    0: [1, 2],
    1: [3],
    2: [1],
    3: [4],
    4: []
};

const graph5 = {
    0: []
};

// Unit testing
assert.deepStrictEqual(hasCycle(graph1), true); 
assert.deepStrictEqual(hasCycle(graph2), false); 
assert.deepStrictEqual(hasCycle(graph3), true); 
assert.deepStrictEqual(hasCycle(graph4), false); 
assert.deepStrictEqual(hasCycle(graph5), false); 
