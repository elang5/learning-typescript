// type assertion
// if a variable is declared without a value, its type is "any", so in order to access intellisense we must specify a type
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// let log = function(message) {
//   console.log(message);
// }
// arrow functions
var doLog = function (message) { return console.log(message); };
// custom types and inline annotation and INTERFACES
// Cohesion using a class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// calling the method draw
// initialize a new Point with 'new' keyword
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
