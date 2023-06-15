// * AABs - Global *

// * Tests >
// ! => The URI decode and encode will be added when the time comes!

// NB 1 : eval()
// > The eval() method evaluates or executes arguments or statements >

// eval(string) ❗

// ! DO NOT USE EVAL()
// ! Malicious code can run inside your application without permission!

let x = 10;
let y = 20;
let text = 'x * y';

let result = eval(text);

// NB 2 : infinity / -infinity
// > Infinity is a number that represents positive or negative infinity >

// > A number reaches Infinity when it exceeds the upper or lower limit for a number :

// Infinity

const infinityLimit = 1.797693134862315e308; // Limit
const exceededLimit = 1.797693134862315e309; // Infinity

// NB 3 : isFinite() / Number.isFinite()
// > The isFinite() method returns TRUE if a value is a FINITE number, if false returns Infinity, -Infinity or NaN >
// ! isFinite() converts the value to a number before testing it.

// isFinite(value) / Number.isFinite(value)

const itIs = isFinite(exceededLimit);

// NB 4 : isNaN() / Number.isNaN()
// > Short for "Not-a-Number"; the isNaN() method returns TRUE if a value is NaN >
// ! The isNaN() method converts the value to a number before testing it.

// isNaN(value)

const NaNTest = 'Nope';

const itIsNot = isNaN(NaNTest);

// NB 5 : Number()
// > The Number() method converts a value to a number; if cannot be converted, NaN is returned >

// Number(value)

const numberBooleans = true; // ⬅ Return
const numberDate = new Date(); // ⬅ Return
const numberString = 'Mamma mia!'; // ⬅ Return

console.log(Number(numberBooleans));

// NB 6 : parseFloat()
// > The parseFloat() method PARSES a value as a string and returns the FIRST number; if the first character cannot be converted, NaN is returned >

// parseFloat(value)

console.log(parseFloat(1000));
console.log(parseFloat('     10'));
console.log(parseFloat('10.33'));
console.log(parseFloat('34 45 56'));
console.log(parseFloat('He was 40'));

// NB 7 : parseInt()
// > The parseInt method parses a value as a string and returns the FIRST integer; if the first character cannot be converted, NaN is returned >

// > A RADIX parameter specifies the number system to use

// ! 2 = binary, 8 = octal, 10 = decimal(default), 16 = hexadecimal

// parseInt(string ❗, radix)

console.log(parseInt('01101', 2));
console.log(parseInt('010', 8));
console.log(parseInt('3f', 16));
console.log(parseInt('3 f', 16));

// NB 8 : String()
// > The String() method converts a value to a string, returns toString() for no value >

// String(value)

const stringString = 'Monkey be rising!'; // ⬅ Return
const stringDate = new Date(); // ⬅ Return
const stringNumber = 12345; // ⬅ Return

console.log(String(stringDate));

// NB 9 : undefined
// > The undefined property indicates that a variable has not been assigned a value, or not declared at all >

// console.log(undefined);
