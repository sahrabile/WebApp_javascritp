//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

console.group('Searching with exact eqaulity');
const animals = ['dog', 'cat', 'seal', 'elephant', 'walrus', 'lion'];
console.log(`Elephant is at ${animals.indexOf('elephant')}`); // 3
console.log(`Walrus is at ${animals.lastIndexOf('walrus')}`); // 4
console.log(`Array includes 'dog': ${animals.includes('dog')}`); // true
console.groupEnd();

console.group('Searching with filter criteria');
const nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
// Find the first value over 10.
const bigNum = nums.find(element => element > 10);
console.log(`First >10 number is ${bigNum}`); // 19 (the first match)

const bigNumIndex = nums.findIndex(element => element > 100);
console.log(`First >10 number is at index ${bigNumIndex}`); // 4
console.groupEnd();
