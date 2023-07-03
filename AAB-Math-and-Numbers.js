// * AABs - Math & Numbers *

// * Part I - Math >

// ! Math is not a constructor!
// > All properties/methods of Math can be called by using Math as an object, without creating it :

// * Tests >

// NB 1 : floor()
// > The Math.floor() method rounds a number DOWN to the nearest integer >

// Math.floor(x)

const floorMinus = Math.floor(-4.1);
const floorPositive = Math.floor(4.1);

// NB 2 : max()
// > The Math.max() method returns the number with the HIGHEST value >

// Math.max(n1, n2,...)

const max = Math.max(10, 35, 22, -41);

// NB 3 : min()
// > The Math.min() method returns the number with the lowest value >

// Math.min(n1, n2,...)

const min = Math.min(10, 35, 22, -41);

// NB 4 : pow()
// > The Math.pow() method returns the value of x to the power of y (xy) >

// Math.pow(x, y) // y = Exponent

const pow = Math.pow(4, 3);

// NB 5 : random()
// > The Math.random() method returns a random number from 0 (INCLUSIVE) up to but not including 1 (EXCLUSIVE) >

// Math.random()

const random = Math.random();

// * Range from 0 up to 0.9 (32 bit)

// > A random whole number between 1 and 100 >

const randomRangeOfNumbers = Math.floor(Math.random() * 100 + 1);

// ! Decomposition >

// 1 = Number from 0 up to 0.9 * 100 > from 0 up to 99.9
// 2 = + 1 = from 1 up to 100.9
// 3 = .floor = Rounded DOWN = from 1 up to 100

// NB 6 : round()
// > The Math.round() method rounds a number to the nearest integer; 2.49 will be rounded down (2), and 2.5 will be rounded up (3) >

// Math.round(x)

const round = Math.round(2.49);

// NB 7 : sign()
// > The Math.sign() method returns whether a number is negative, positive or zero >

// * If the number is POSITIVE, this method returns 1.
// * If the number is NEGATIVE, it returns -1.
// * If the number is ZERO, it returns 0.

// Math.sign(x)

const sign = Math.sign(-1);

// NB 7 : sqrt()
// > The Math.sqrt() method returns the square root of a number >

// Math.sqrt(x)

const sqrt = Math.sqrt(2);

// NB 8 : trunc()
// > The Math.trunc() method returns the integer part of a number; removes the decimals (does NOT round the number) >

const numberOne = 23.45;

const trunc = Math.trunc(numberOne);

// NB 9 : ceil()
// > The Math.ceil() method rounds a number rounded UP to the nearest integer >

const ceil = Math.ceil(numberOne);

// * Part II - Numbers >

// * Test Subjects >

const number = 38;
const floatingNumber = 3.8;
const exponentialNumber = 5.53678;

// * Tests >

// NB 0 : constructor
// > The constructor property returns the function that created the Number prototype >

// number.constructor

// return = function Number() { [native code] }

const constructor = number.constructor;

// NB 1 : isInteger() ☯
// > The Number.isInteger() method returns true if a value is an integer of the datatype Number; otherwise it returns false >

// Number.isInteger(value)

const isInteger = Number.isInteger(floatingNumber);

// NB 2 : MAX_VALUE / MIN_VALUE
// > Returns the largest and the smallest number possible in JavaScript >

const maxValueJS = Number.MAX_VALUE;
const minValueJS = Number.MIN_VALUE;

// NB 3 : toExponential()
// > The toExponential() method converts a number into an exponential notation >

// number.toExponential(x)

const exponential = exponentialNumber.toExponential();

// NB 4 : toFixed()
// > The toFixed() method converts a number to a string; rounds the string to a specified number of decimals >

// number.toFixed(x)

const toFixed = exponentialNumber.toFixed(2);

// NB 5 : toPrecision()
// > The toPrecision() method formats a number to a specified length; a decimal point and nulls are added (if needed), to create the specified length >

// number.toPrecision(x)

const toPrecision = floatingNumber.toPrecision(4);

// NB 6 : toString()
// > The toString() returns a number as a string >

// number.toString(radix) // Base 10 default

const toString = number.toString(16);

// NB 7 : valueOf()
// > The valueOf() method returns the primitive value of a number >

// number.valueOf()

const valueOf = number.valueOf();
