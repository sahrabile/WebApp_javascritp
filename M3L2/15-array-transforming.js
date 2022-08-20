//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

const decArray = [23, 255, 122, 5, 16, 99];
// Use the toString() method to conver to base-16 values
const hexArray = decArray.map( element => element.toString(16) );
console.log(`Changed ${decArray} to ${hexArray}`); // ['17', 'ff', '7a', '5', '10', '63']