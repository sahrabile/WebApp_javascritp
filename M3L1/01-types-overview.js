//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

console.group('DECLARING variables and constants');
// data types in js, but note you do NOT declare a datatype for variable
// variables are declared using let
// Using strict mode revents you from using a variable before it is declared
let stringTest = '42';
let numberTest = 42;
let booleanTest = true;
let bigIntTest = 1234n;

let symbolTest = Symbol("propertyName");    // ensures a unique identifier, even if propertyname is the same
let objectTest = {};   // empty object, object root of every type on js

// undefined, null, defines not set a value, NaN is used to indicate Not A Number
let undefinedTest = undefined;
let nullTest = null;
let NaNTest = NaN;

// constants are declared using const, and cannot be reassigned
const stringConst = "I am a constant string";
//stringConst = "trying to set another value";  // TypeError

//use console.log() to print expressions and variables to the console
console.log(stringTest, typeof stringTest);
console.log(numberTest, typeof numberTest);
console.log(booleanTest, typeof booleanTest);
console.log(bigIntTest, typeof bigIntTest);
console.log(symbolTest, typeof symbolTest);
console.log(objectTest, typeof objectTest);

console.groupEnd();
console.group('MIX ANY TYPE');
// As you do NOT declare a datatype for variable, you can use any datatype in a variable at any time
stringTest = 42;
numberTest = objectTest;
bigIntTest = BigInt("1"+ "0".repeat(100)); // one googol 10E100;

console.log(stringTest);
console.log(numberTest);
console.log(bigIntTest);

// And you can mix crazily and js tries to make type conversion convert to string (most cases) or Number
stringTest = 42 + 42 + '42' + 42 + booleanTest;  
console.log(stringTest); // 844242true;


//if a variable is not assigned a value it is undefined
let a;
console.log(a == undefined);


console.groupEnd();
console.group('TESTING FOR EQUALITY');
// non-strict equality operator: == != test for eqality after type conversions and returns a Boolean result. 
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

// strict equality operator: === and !== the strict equality operator always considers operands of different types to be different.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// almost ALWAYS use === and !== 

console.log('null and undefined');
console.log (nullTest == undefinedTest);  // true
console.log (nullTest === undefinedTest);  // false

objectTest = null;
console.log (objectTest == undefined);  // true
console.log (objectTest === undefined);  // false


console.log('boolean, string and numbers');
let b = 1, c= "1" , d = true, e = "0";
console.log (b == c);     // true
console.log (b === c);    // false    - more strict

console.log(b == d);      // true
console.log(b === d);     // false

console.log(e == false);   //true
console.log(e === false);  //true


console.log('Testing object equality');
let name1 = {firstName: "Jane", lastName: "Doe"};
let name2 = {firstName: "Jane", lastName: "Doe"};

let name3 = name2;  // refer to the same object

// always assume reference equality
console.log('object referential equality');
console.log (name1 == name2);    //false
console.log (name1 === name2);   //false

console.log (name2 == name3);    //true
console.log (name2 === name3);   //true

// for value equality you need to implement yourself the method to compare object content
console.log('object value equality');
console.log(JSON.stringify(name1), JSON.stringify(name2), isEqual(name1, name2)); 

name1.phone = '123';  //adding a property for test
console.log(JSON.stringify(name1), JSON.stringify(name2), isEqual(name1, name2)); 


//For now, simply base value Equality on the objects string representation using JSON.stringify()
//it is not optimal as stringify() does not quarantee the property order - but you get the idea.
//see correct solutions in my object-equality section
function isEqual(obj1, obj2) {
  return (JSON.stringify(obj1) === JSON.stringify(obj2));
}

