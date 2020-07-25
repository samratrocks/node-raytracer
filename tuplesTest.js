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
    const a1 = Tuple.createTuple(3, -2, 5, 1);
    const a2 = Tuple.createTuple(-2, 3, 1, 0);
    const testTuple = Tuple.createTuple(1, 1, 6, 1);
    assert(a1.add(a2).equals(testTuple));
}

function testSubtraction() {
    // Subtracting two points
    const p1 = new Tuple.Point(3, 2, 1);
    const p2 =  new Tuple.Point(5, 6, 7);
    const testVector = new Tuple.Vector(-2, -4, -6);
    assert(p1.subtract(p2).equals(testVector));

    // Subtracting a vector from a point
    const p = new Tuple.Point(3, 2, 1);
    const v = new Tuple.Vector(5, 6, 7);
    const testPoint = new Tuple.Point(-2, -4, -6);
    assert(p.subtract(v).equals(testPoint));

    // Subtracting two vectors
    const v1 = new Tuple.Vector(3, 2, 1);
    const v2 = new Tuple.Vector(5, 6, 7);
    const testVector2 = new Tuple.Vector(-2, -4, -6);
    assert(v1.subtract(v2).equals(testVector2));
}

function testNegation() {
    // Subtracting a vector from a zero vector
    const zero = new Tuple.Vector(0, 0, 0);
    const v = new Tuple.Vector(1, -2, 3);
    const testVector = new Tuple.Vector(-1, 2, -3);
    assert(zero.subtract(v).equals(testVector));

    // Negating a tuple
    const a = new Tuple.Tuple(1, -2, 3, -4);
    const t = new Tuple.Tuple(-1, 2, -3, 4);
    assert(a.negate().equals(t));
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
