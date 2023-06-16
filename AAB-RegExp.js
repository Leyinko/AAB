// * AABs - RegExp *

// > A regular expression is a pattern of characters >
// > The pattern is used for searching and replacing characters in strings >

// /pattern/modifier(s);

// NB > Symbols Legend >

// > 🔄: Return New Array
// > ☯ : Boolean Return

// * Test Subjects >

const string = 'Devolver Digital!!';
const multilineString = `Div
olver62
Digi
talD`;
const phoneNumber = '1 644 67 52 4357';
const followQuant = 'Is this all there is';

// * Methods >

// ! The Global modifier is used in almost every examples to output various values!

// NB 1 : exec() ☯ 🔄
// > The exec() method tests for a match in a string; if it finds a match, it returns a result ARRAY >

// RegExpObject.exec(string)

const exec = /e/g.exec(string);

// NB 2 : test() ☯
// > The test() method tests for a match in a string, if it finds a match, it returns true >

// RegExpObject.test(string)

const test = /Dig/.test(string);

// NB 3 : match() 🔄
// > The match() methods returns a result Array, and allows many results elements >

// string.match(RegExpObject)

let patternMatch = /e/g; // Example with the global modifiers!
const match = string.match(patternMatch);

// * Modifiers >

// NB 1 : g
// > The "g" modifier specifies a GLOBAL match; finds all matches, not only the first >

// /regexp/g

let patternG = /i/g;
let resultG = patternG.exec(string);

// NB 2 : i
// > The "i" modifier specifies a case-insensitive match >

// /regexp/i

let patternI = /di/i;
let resultI = patternI.test(string);

// NB 3 : m
// > The "m" modifier specifies a multiline match >

// > ^ = Starts ; $ = Ends

// /regexp/m

let patternMEnds = /D$/m;
let patternMStarts = /^D/gm; // Global for the Two outputs!
let resultMEnds = multilineString.match(patternMEnds);
let resultMStarts = multilineString.match(patternMStarts);

// * Brackets >

// NB : [abc]
// > Brackets [abc] specifies matches for the characters inside the brackets, they can define a signe character, groups or character spans >

// > [abc] = Any characters a, b or c.
// > [A-Z] = Any character from uppercase A to Z.
// > [a-z] = Any character from A to Z.

let patternAbc = /[a-z]/gi; // All characters from A to Z, with insensitive modifier.
let resultPatternAbc = string.match(patternAbc);

// NB : [^abc]
// > Brackets [^abc] specifies matches for any character NOT inside the brackets, they can define a signe character, groups or character spans >

// > [^abc] = Not any characters a, b or c.
// > [^A-Z] = Not any character from uppercase A to Z.
// > [^a-z] = Not any character from A to Z.

let patternNotAbc = /[^e]/g;
let resultPatterNotAbc = string.match(patternNotAbc);

// NB : [0-9] and [^0-9]
// > The [0-9] expression is used to find any character between the brackets; the digits inside the brackets can be any numbers or span of numbers from 0 to 9 >

let pattern09 = /[0-3]/g;
let resultPattern09 = phoneNumber.match(pattern09);

let patternNot09 = /[^0-4]/g;
let resultPatternNot09 = phoneNumber.match(patternNot09);

// NB : [x|y]
// > The (x|y) expression is used to find any of the alternatives specified; the alternatives can be of any characters >

let patternXy = /[D|62]/gm;
let resultPatternXy = multilineString.match(patternXy);

// * Metacharacters >

// ! The Global modifier is used in almost every examples to output various values!

// > Metacharacters are characters with a special meaning > ❕ = \

// NB : \w
// > The \w metacharacters matches word characters >

let wordTest = string.match(/\w/g);

// NB : \W
// > The \w metacharacters matches NON-word characters >

let nonWordTest = string.match(/\W/g);

// NB : \d and \D (NOT)
// > The \d metacharacters matches digits from 0 to 9 >

let digit = multilineString.match(/\d/g);

// * Quantifiers >

// NB : *
// > The * quantifier matches any string that contains zero or more occurrences of [X] >

let quantifierX = multilineString.match(/Di*/g);

// NB : {X}
// > A global search for a substring that contains a sequence of digits >

let quantifierSequence = phoneNumber.match(/\d{3}/g); // Sequence of 3 digits

// NB : {X, Y}
// > A global search for a substring that contains a sequence of X digits to Y >

let quantifierSequenceTo = phoneNumber.match(/\d{3,4}/g); // Sequence of 3 up to 4 digits

// NB : {X,}
// > A global search for a substring that contains at LEAST a sequence of digits >

let quantifierLeast = phoneNumber.match(/\d{2,}/g);

// NB : ?= and !?
// > The ?= quantifier matches any string that is followed / OR NOT ;by a specific string >

let followYes = followQuant.match(/is(?= all)/g);
