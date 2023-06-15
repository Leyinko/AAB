// * AABs - Arrays *

// NB > Symbols Legend >

// > ⭐: Callback Functions
// > 🔧: Technical Custom Methods
// > 💫: Return Iterator
// > 🔄: Return New Array
// > ☯ : Boolean Return

// * Test Subjects >

const array = [1, 'Hello', { name: 'test', date: 12.06 }]; // [2] = 3
const mixedArray = [2, 3, 'Farewell', 'Morning', { name: 'clear', date: 2023 }];
const stringArray = ['Banana', 'Apple', 'Orange', 'Salad']; // [3] = 4
const numberArray = [32, 33, 16, 40]; // [3] = 4
const dimensionsArray = [[1, 2], [3, [4, 5]], 6, 7]; // (2) Dimensions
const string = 'Sweat';

// * Tests >

// NB 1 : at()
// > The at() method returns an indexed element from an array >

// array.at(index)

const at = array.at(2);

// NB 2 : concat() 🔄
// > The concat() method returns a new array, containing the joined arrays >
// ! Does not change original Array.

// array1.concat(array2, array3, ..., arrayX)

const concat = array.concat(mixedArray);

// NB 3 : constructor 🔧
// > The constructor property returns the function that created the Array prototype >

// array.constructor

// return = function Array() { [native code] }

const constructor = array.constructor;

// NB 4 : copyWithin()
// > The copyWithin() method copies array elements to another position in the array >
// ! Overwrites the existing values and does not add items to the array.

// array.copyWithin(target, start, end)

const copyWithin = array.copyWithin();

// NB 5 : entries() 💫 🔄
// > The entries() method returns an Array Iterator object with key/value pairs >
// ! Does not change original Array.

// array.entries()

const entries = array.entries();

// for (let x of entries) {
//   console.log(x);
// }
// console.log(entries);

// NB 6 : every() ⭐ ☯
// > The every() method returns TRUE if the function returns true for ALL elements and FALSE if the function returns false for ONE element >
// ! Does not change original Array.

// array.every(function(currentValue, index, arr), thisValue)

const every = numberArray.every((number) => {
  return number > 18;
});

// NB 7 : fill()
// > The fill() method fills specified elements in an array with a value >
// ! Overwrites the original Array.

// array.fill(value, start, end)

const fill = stringArray.fill('Banana', 2);

// NB 8 : filter() ⭐🔄
// > The filter() method creates a new array filled with elements that PASS a test provided by a function >
// ! Does not change original Array.

// array.filter(function(currentValue, index, arr), thisValue)

const filter = mixedArray.filter((element) => {
  return typeof element === 'string';
});

// NB 9 : find() ⭐
// > The find() method returns the value of the FIRST element that PASSES a test or return undefined if no element found >
// ! Does not change original Array.

// array.find(function(currentValue, index, arr),thisValue)

const find = mixedArray.find((element) => {
  return typeof element === 'number';
});

// NB 10 : findIndex() ⭐
// > The findIndex() method returns the index (position) of the FIRST element that PASSES a test and return -1 if no element found >
// ! Does not change original Array.

// array.findIndex(function(currentValue, index, arr), thisValue)

const findIndex = mixedArray.findIndex((element) => {
  return typeof element === 'string';
});

// NB 11 : flat()
// > The flat() method concatenates sub-array elements >

// array.flat(depth)

const flat = dimensionsArray.flat(2);

// NB 12 : flatMap() ⭐ 🔄
// > The flatMap() method maps all array elements and creates a new flat array >
// ! Does not change original Array.

// array.flatMap(function(currentValue, index, arr), thisValue)

const flatMap = numberArray.flatMap((element) => {
  console.log(element);
});

// NB 13 : forEach() ⭐
// > The forEach() method CALLS a FUNCTION for each element in an array >

// array.forEach(function(currentValue, index, arr), thisValue)

let total = 0; // ⬅ Return

const sum = (number) => {
  total += number;
};

numberArray.forEach(sum);

// NB 14 : Array.from() 🔄
// > The Array.from() method returns an array from any object with a LENGTH property; returns an ARRAY from ANY ITERABLE object >

// Array.from(object, mapFunction, thisValue)

const from = Array.from(string);

// NB 15 : includes() ☯
// > The includes() method returns TRUE if an array contains a specified value, returns false if the value is not found >
// ! Case sensitive.

// array.includes(element, start)

const includes = mixedArray.includes('Farewell');

// NB 16 : indexOf()
// > The indexOf() method returns the FIRST index (position) of a specified value'; returns -1 if the value is not found > From LEFT to RIGHT!

// array.indexOf(item, start)

const indexOf = stringArray.indexOf('Banana');

// NB 17 : isArray() ☯
// > The isArray() method returns TRUE if an object is an array, otherwise FALSE >

// Array.isArray(obj)

const isArray = Array.isArray(dimensionsArray);

// NB 18 : join()
// > The join() method returns an array as a STRING >
// ! Does not change original Array.

// array.join(separator)

const join = stringArray.join(' > ');

// NB 18 : keys() 💫 🔄
// > The keys() method returns an Array Iterator object with the KEYS of an array >
// ! Does not change original Array.

// array.keys()

const keys = array.keys();

// for (let x of keys) {
//   console.log(x); // ⬅ INDEX for Arrays
// }
// console.log(keys);

// NB 19 : lastIndexOf()
// > The indexOf() method returns the FIRST index (position) of a specified value'; returns -1 if the value is not found > From RIGHT to LEFT!

// array.lastIndexOf(item, start)

const lastIndexOf = stringArray.lastIndexOf('Banana');

// NB 20 : length()
// > The length property SETS or RETURNS the number of elements in an array >

// Return the length of an array:
// array.length

const returnLength = string.length;

// Set the length of an array:
// array.length = number

mixedArray.length = 4;

// NB 21 : map() ⭐ 🔄
// > The map() creates a NEW ARRAY from CALLING a function for every array element.
// ! Does not change original Array.

// array.map(function(currentValue, index, arr), thisValue)

function mapSum(number) {
  return number * 10;
}

const map = numberArray.map(mapSum);

// NB 22 : pop()
// > The pop() method REMOVES (pops) the LAST element of an array >
// ! Overwrites the original Array and returns removed element.

// array.pop()

const pop = numberArray.pop();

// NB 23 : prototype 🔧
// > prototype allows you to add new properties and methods to array; available with all JavaScript objects >
// ! Basically created an in-built function.

// Array.prototype.name = value
// * In this case the .this refers to the User Input!

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

stringArray.myUcase();

// NB 24 : push()
// > The push() method ADDS new items to the END of an array >
// ! The push() method changes the length of the array an returns the NEW length.

// array.push(item1, item2, ..., itemX)

const push = numberArray.push(69);

// NB 25 : reduce() ⭐
// > The reduce() method executes a reducer function for array element; returns a single value: the function's accumulated result > From LEFT to RIGHT
// ! Does not change original Array.

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue ❗)

const reduce = stringArray.reduce((acc, next) => {
  return acc + next;
}, '');

// NB 26 : reduceRight() ⭐
// > The reduceRight() method executes a reducer function for array element; returns a single value: the function's accumulated result > From RIGHT to LEFT
// ! Does not change original Array.

// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

const reduceRight = stringArray.reduceRight((acc, next) => {
  return acc + next;
}, '');

// NB 27 : reverse()
// > The reverse() method reverses the order of the elements in an array >
// ! Overwrites the original Array.

// array.reverse()

dimensionsArray.reverse();

// NB 28 : shift()
// > The shift() method REMOVES the FIRST item of an array >
// ! Overwrites the original Array and returns removed element.

// array.shift()

const shift = numberArray.shift();

// NB 29 : slice() 🔄
// > The slice() method returns selected elements in an array, as a NEW array;selected from a given start, up to a (not inclusive) given end >
// ! Does not change original Array.

// array.slice(start, end)

const slice = stringArray.slice(1, 2);

// NB 30 : some() ⭐ ☯
// > The some()  method returns TRUE (and stops) if the function returns true for ONE of the array element  and FALSE if the function returns false for ALL the elements >
// ! Does not change original Array.

// array.some(function(value, index, arr), this)

const some = numberArray.some((number) => {
  return number > 18;
});

// NB 31 : sort() ⭐
// > The sort() sorts the elements of an array; sorts the elements as strings in alphabetical and ascending order >
// ! Overwrites the original Array.

// array.sort(compareFunction)

// (Extra Function for Strings .localeCompare)
// (a - b / b -a for Numbers)

numberArray.sort();

// NB 32 : splice()
// > The splice() method adds and/or removes array elements >
// ! Overwrites the original Array and returns removed elements.

// array.splice(index, how many, item1, ....., itemX)

const splice = mixedArray.splice(0, 2, 'Increíble');

// NB 33 : toString()
// > The toString() method returns a string with array values separated by commas >
// ! Does not change original Array.

// array.toString()

const toString = array.toString();

// NB 34 : unshift()
// > The unshift() method ADDS new elements to the BEGINNING of an array >
// ! Overwrites the original Array and returns the NEW length.

// array.push(item1, item2, ..., itemX)

const unshift = numberArray.unshift(603);

// NB 35 : valueOf()
// > The valueOf() method returns the array itself >
// ! This is not a copy, it's a reflection of the original!

// array.valueOf()

const valueOf = numberArray.valueOf();

// valueOf.push(45);
// console.log(valueOf);
// console.log(numberArray);
