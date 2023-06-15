// * AABs - Strings *

// NB > Symbols Legend >

// > ⭐: Callback Functions
// > 🔧: Technical Custom Methods
// > 💫: Return Iterator
// > 🔄: Return New Array
// > ☯ : Boolean Return

// * Test Subjects >

const string = 'Paradox';
const stringTrim = ' This is MADNESS ';
const lowerCase = 'mini tiny';
const upperCase = 'BIG ENOUGH FOR YOU';

// * Tests >

// NB 1 : at()
// > The at() method returns an indexed character from a string  >

// string.at(index)

const at = string.at(2);

// NB 2 : charAt()
// > The charAt() method returns the character at a specified index (position) in a string; first character is 0, the second 1, ... >

// string.charAt(index)

const charAt = string.charAt(2);

// NB 3 : charCodeAt() / codePointAt()
// > charCodeAt() is UTF-16, codePointAt() is Unicode; both methods returns the corresponding value at an index (position) in a string >

// string.charCodeAt() / string.codePointAt(index)

const codeString = string.charCodeAt();

// NB 4 : concat() 🔄
// > The concat() method joins two or more strings, into a new string >
// ! Does not change original String.

// string.concat(string1, string2, ..., stringX)

const concatString = string.concat(stringTrim, lowerCase);

// NB 5 : constructor 🔧
// > The constructor property returns the function that created the String prototype >

// string.constructor

// return = function String() { [native code] }

const constructor = string.constructor;

// NB 6 : endsWith() ☯
// > The endsWith() method returns TRUE if a string ends with a specified string; otherwise it returns false >
// ! Case sensitive.

// string.endsWith(searchValue, length)

const endsWith = stringTrim.endsWith('MADNESS '); // Space Character'

// NB 7 : includes() ☯
// > The includes() method returns TRUE if an array contains a specified value, returns false if the value is not found >
// ! Case sensitive.

// string.includes(searchValue, start)

const includes = string.includes('ox');

// NB 8 : indexOf()
// > The indexOf() method returns the index (position) of the FIRST occurrence of a value in a String; returns -1 if the value is not found > From LEFT to RIGHT!
// ! Case sensitive.

// string.indexOf(searchValue, start)

const indexOf = stringTrim.indexOf('i');

// NB 9 : lastIndexOf()
// > The lastIndexOf() method returns the index (position) of the LAST occurrence of a specified value in a string;  returns -1 if the value is not found > From RIGHT to LEFT!
// ! Case sensitive.

// string.lastIndexOf(searchValue, start)

const lastIndexOf = stringTrim.lastIndexOf('i');

// NB 10 : length()
// > The length property returns the length of a string; the length property of an empty string is 0 >

// string.length

console.log(string.length);

// NB 11 : localeCompare() ⭐
// > The localeCompare() method compares two strings in the current locale; returns sort order -1, 1, or 0 (for before, after, or equal) >

// string.localeCompare(compareString)

const compareLowA = 'a';
const compareCapA = 'A';

const localeCompare = compareLowA.localeCompare(compareCapA);

// > Pre-made functions to order Strings into Array with the .localeCompare() and .sort() >

const stringArray = ['Abed', 'Annie', 'Troy', 'Pierce', 'Jeff'];

const stringOrderAscent = (a, b) => a.localeCompare(b);
const communityCharacterSorted = stringArray.sort(stringOrderAscent);

// NB 12 : match() 🔄
// > The match() method matches a string against a regular expression; returns an ARRAY of matches >

// string.match(match)

const match = stringTrim.match('MADNESS');

// NB 13 : padEnd()
// > The padEnd() method pads a string at the END; (multiple times) until it reaches a given length ; To pad a number, convert the number to a string first >

// string.padEnd(length, string)

const padEnd = string.padEnd(13, '-');

// NB 14 : padStart()
// > The padEnd() method pads a string from the START; (multiple times) until it reaches a given length >

// string.padStart(length, string)

const padStart = string.padStart(13, '-');

// NB 15 : repeat()
// > The repeat() method returns a string with a NUMBER of COPIES of a string; returns a new string >
// ! Does not change original String.

// string.repeat(count)

const repeat = stringTrim.repeat(3);

// NB 16 : replace()
// > The replace() method searches a string for a value or a regular expression;returns a new string with the value(s) replaced >
// ! Does not change original String.

// string.replace(searchValue, newValue)

const replace = stringTrim.replace('MADNESS', 'crazy!');

// NB 17 : search()
// > The search() method matches a string against a regular expression; returns the index of the FIRST match >
// ! Case sensitive.

// string.search(searchValue)

const search = stringTrim.search('MADNESS');

// NB 18 : slice() 🔄
// > The slice() method extracts a part of a String, as a NEW string; given start and end parameters specifies the part of the string to extract >
// ! Does not change original String.

// string.slice(start, end)

const slice = string.slice(0, 4);

// NB 19 : split() 🔄
// > The split() method splits a string into an array of substrings; returns a NEW array >
// ! Does not change original String.

// string.split(separator, limit)

const split = upperCase.split(' ');

// NB 20 : startsWith() ☯
// > The startsWith() method returns TRUE if a string starts with a specified string; otherwise it returns false >
// ! Case sensitive.

// string.startsWith(searchValue, length)

const startsWith = string.startsWith('p');

// NB 21 : substr()
// > The substr() method extracts a part of a string between two indices (to end exclusive) and returns the substring >
// ! Does not change original String.

// string.substring(start, length)

const subtract = upperCase.substring(4, 10);

// NB 21 : toLowerCase()
// > The toLowerCase() method converts a string to lowercase letters >
// ! Does not change original String.

// string.toLowerCase()

const toLowerCase = upperCase.toLocaleLowerCase();

// NB 21 : toUpperCase()
// > The toUpperCase() method converts a string to uppercase letters >
// ! Does not change original String.

// string.toUpperCase()

const toUpperCase = lowerCase.toUpperCase();

// NB 22 : trim(), trimStart() and trimEnd()
// > The trim() method removes whitespace, the Start() from the beginning and the End() from the end >
// ! Does not change original String.

// string.trim() / string.trimStart() / string.trimEnd()

const trim = stringTrim.trim();

// NB 23 : valueOf()
// > The valueOf() method returns the primitive value of a string >
// ! This is not a copy, it's a reflection of the original!

// string.valueOf()

const valueOf = string.valueOf();
