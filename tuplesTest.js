const assert = require('assert')
const Tuple = require('./tuples');

const t = new Tuple.Tuple(4.3, -4.2, 3.1, 1.0);
assert(t.y === -4.2);
assert(t.z === 3.1);
assert(t.w === 1.0);
assert(t instanceof Tuple.Point);
assert(!(t instanceof Tuple.Vector));

const v = new Tuple.Tuple(4.3, -4.2, 3.1, 0.0);
assert(v.x === 4.3);
assert(v.y === -4.2);
assert(v.z === 3.1);
assert(v.w === 0.0);
assert(v instanceof Tuple.Vector);
assert(!(v instanceof Tuple.Point));

console.log('All tests passed...');