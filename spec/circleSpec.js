
var Circle = require('../circle');

describe("Circle", function() {

    describe("area", function() {
        it("works for a radius of 1", function() {
            var circle = new Circle(1);
            expect(circle.area()).toEqual(3.14);
        });

        it("works for radius of 2", function() {
            var circle = new Circle(2);
            expect(circle.area()).toEqual(12.56);
        })
    });

    describe("diameter", function() {
        it("returns 2r", function() {
            var circle = new Circle(1);
            expect(circle.diameter()).toEqual(2);
        });
    });
})