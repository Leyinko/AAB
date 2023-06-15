// * AABs - Booleans *

// * Test Subjects >

const boolean = true;
const booleanNot = false;

// * Tests >

// NB 1 : constructor 🔧
// > The constructor property returns the function that created the Boolean prototype >

// return = function Boolean() { [native code] }

const constructor = boolean.constructor;

// NB 2 : prototype 🔧
// > prototype allows you to add new properties and methods to booleans; available with all JavaScript objects >
// ! Basically created an in-built function.

// Boolean.prototype.name = value
// * In this case the .this refers to the User Input!

Boolean.prototype.myColor = function () {
  if (this.valueOf() == true) {
    return 'green';
  } else {
    return 'red';
  }
};

let a = true;
let color = a.myColor(); // ⬅ Return

// NB 3 : toString()
// > The toString() method returns a boolean as a string >

// boolean.toString()

const toString = booleanNot.toString();

// NB 4 : valueOf()
// > valueOf() returns the primitive value of a boolean >
// ! This is not a copy, it's a reflection of the original!

// boolean.valueOf()

const valueOf = boolean.valueOf();
