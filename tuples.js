class Tuple {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    add(tuple) {
        return new Tuple(
            this.x + tuple.x,
            this.y + tuple.y,
            this.z + tuple.z,
            this.w + tuple.w,
        );
    }

    subtract(tuple) {
        return new Tuple(
            this.x - tuple.x,
            this.y - tuple.y,
            this.z - tuple.z,
            this.w - tuple.w,
        );
    }

    negation() {
        return new Tuple(
            -this.x,
            -this.y,
            -this.z,
            -this.w,
        );
    }

    multiply(x) {
        return new Tuple(
            this.x * x,
            this.y * x,
            this.z * x,
            this.w * x,
        )
    }

    divide(x) {
        return this.multiply(1 / x);
    }

    equals(tuple) {
        return ((this.x === tuple.x) &&
            (this.y === tuple.y) &&
            (this.z === tuple.z) &&
            (this.w === tuple.w))
    }

    toJsonString() {
        return JSON.stringify({ x: this.x, y: this.y, z: this.z, w: this.w });
    }
}

class Vector extends Tuple {
    constructor(x, y, z) {
        super(x, y, z, 0);
    }
}

class Point extends Tuple {
    constructor(x, y, z) {
        super(x, y, z, 1)
    }
}

// Factory method for creating the appropriate type of Tuple
function createTuple(x, y, z, w) {
    if (w === 1) {
        return new Point(x, y, z);
    } else if (w === 0) {
        return new Vector(x, y, z);
    } else {
        return new Tuple(x, y, z, w);
    }
}


module.exports = { createTuple, Vector, Point, Tuple };
