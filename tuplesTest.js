const assert = require('assert')
const Tuple = require('./tuples');


// Constructor tests
function testPointCreation() {
    const t = Tuple.createTuple(4.3, -4.2, 3.1, 1.0);
    assert(t.y === -4.2);
    assert(t.z === 3.1);
    assert(t.w === 1.0);
    assert(t instanceof Tuple.Point);
    assert(!(t instanceof Tuple.Vector));
}

function testVectorCreation() {
    const v = Tuple.createTuple(4.3, -4.2, 3.1, 0.0);
    assert(v.x === 4.3);
    assert(v.y === -4.2);
    assert(v.z === 3.1);
    assert(v.w === 0.0);
    assert(v instanceof Tuple.Vector);
    assert(!(v instanceof Tuple.Point));
}

function testTupleAndPointEquality() {
    const p1 = new Tuple.Point(4, -4, 3);
    const t1 = Tuple.createTuple(4, -4, 3, 1);
    assert(p1.equals(t1));
}

function testVectorAndPointEquality() {
    const v2 = new Tuple.Vector(4, -4, 3);
    const t2 = Tuple.createTuple(4, -4, 3, 0);
    assert(v2.equals(t2));
}


// Operation tests
function testAddition() {
    const p = new Tuple.Point(4, -4, 3);
    const t = new Tuple.Tuple(0, 0, 1, 0);
    const test = Tuple.createTuple(4, -4, 4, 1);
    assert(p.add(t).equals(test));
}

function testSubtraction() {

}

function testNegation() {

}

function testScalarMultiplication() {
// Multiplication covers division as well   
}

function testDotProduct() {

}

function testCrossProduct() {

}


// Run the tests
const functionsToRun = [
    testPointCreation,
    testVectorCreation,
    testTupleAndPointEquality,
    testVectorAndPointEquality,
    testAddition,
    testSubtraction,
    testNegation,
    testScalarMultiplication,
    testDotProduct,
    testCrossProduct,
];

functionsToRun.forEach(func => func());

// All tests passed
console.log('All tests passed...');
