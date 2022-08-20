//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

const products = new Map();

// Add three items
products.set('RU007', {name: 'Rain Racer 2000', price: 1499.99});
products.set('STKY1', {name: 'Edible Tape', price: 3.99});
products.set('P38', {name: 'Escape Vehicle (Air)', price: 2999.00});

// Check for two items using the item code
console.log(products.has('RU007')); // true
console.log(products.has('RU494')); // false

// Retrieve an item
const product = products.get('P38');
if (typeof product !== 'undefined') {
 console.log(product.price); // 2999
}

// Remove the Edible Tape item
products.delete('STKY1');
console.log(products.size); // 2