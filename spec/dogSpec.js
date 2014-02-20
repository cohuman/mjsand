
var Dog = require('../modules/dog');


describe("Dog", function() {

    describe("bark", function() {
        it("woofs out the name", function() {
            var charlie = new Dog("Charlie");
            expect(charlie.bark()).toEqual("Woof!  My name is Charlie")
        })
    });

    describe("cry", function() {
        it("asks for love", function() {
            var charlie = new Dog("Charlie");
            expect(charlie.cry()).toEqual("Whimper!  Love me!")
        })
    });
});