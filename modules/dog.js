
function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    return "Woof!  My name is " + this.name;
}

Dog.prototype.cry = function() {
    return "Whimper!  Love me!";
}

module.exports = Dog;