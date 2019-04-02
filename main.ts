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
let doLog = (message) => console.log(message);

// custom types and inline annotation and INTERFACES
// Cohesion using a class
class Point {
  // you can use the 'private' prefix to make a property inaccessible
  private x: number;
  private y: number;
  // use ? to make a parameter optional!
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + `, Y: ` + this.y);
  }

  getDistance(another: Point) { 
    // ...
  }
}
// calling the method draw
// initialize a new Point with 'new' keyword
let point = new Point(1, 2);
point.draw();

// access modifiers: public, private, protected; PUBLIC is default

// 39:25
