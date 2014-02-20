var PI = 3.14;

function Circle(radius) {
    this.r = radius;
}

Circle.prototype.area = function() {
    return PI * this.r * this.r;
}

Circle.prototype.diameter = function() {
    return 2 * this.r;
}

Circle.foo = function() {
    return "foo";
}


module.exports = Circle;