class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 0;
    }
}

class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1;
    }
}


class Tuple {
    constructor(x, y, z, w) {
        if (w === 1) {
            return new Point(x, y, z);
        } else if (w === 0) {
            return new Vector(x, y, z);
        } else {
            throw new Error('Invalid w parameter.');
        }
    }
}

module.exports = { Vector, Point, Tuple };