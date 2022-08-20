//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

// The canonical approach
const stringData = '42.23';
const numberData = Number(stringData);
console.log(numberData);

// Compared to parseFloat():
console.log(parseInt(stringData));      // 42
console.log(parseFloat(stringData));    // 42.23

console.log(Number('12.23 goats'));     // NaN
console.log(parseInt('12.23 goats'));   // 12
console.log(parseFloat('12.23 goats')); // 12.23

console.log(Number('2001/01/01'));      // NaN
console.log(parseFloat('2001/01/01'));  // 2001

console.log('\nDANGER zone - use parseInt() or parseFloat()')
console.log(Number(''));                // 0
console.log(Number('   '));             // 0
console.log(parseInt(' '));           // NaN
console.log(parseFloat(' '));           // NaN
