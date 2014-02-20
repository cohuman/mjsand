
function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    return "Woof!  My name is " + this.name;
}

Dog.prototype.cry = function() {
    return "Whimper!  Love me!";
}

Dog.prototype.untested = function() { return "untested"; }
Dog.prototype.stinky = function() { return "stinky"; }
Dog.prototype.scratchy = function() { return "scratchy"; }

module.exports = Dog;