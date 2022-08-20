
// You can use regex in all String.replaceAll(), String.searchString(), String.replace();
// Very powerful

// Use a regular expression to find matches
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

const searchString = "Now is the time and this is the time and that is the time";

// In javascript a RegEx literal is embarced by //
// You can see some patterns and test at https://regexr.com

// below RegEx matches word that starts with 't' followed by any word character (0 or more times) and ends with 'e;
const regexSearch = /t\w*e/g;       

const matches = searchString.matchAll(regexSearch);
for (const match of matches) {
  console.log(`at ${match.index} we found ${match[0]}`);
}


// Use a regular expression to replace patterns
const originalString = 'Now is the time, this is the tame';

// below RegEx matches word that starts with 't' followed by any word character (exactly 2 times) and ends with 'e;
const regexReplace = /t\w{2}e/g;
const newString = originalString.replaceAll(regexReplace, 'place');
console.log(`The regex ${regexReplace} changes "${originalString}" to "${newString}"`);

/* Exercises

1. Write code that replaces every tag '<firstName/>' in below text, with your name using RegEx. 
   '<firstName/> ipsum dolor sit amet, consectetur adipisicing elit, sed do <firstName/> tempor incididunt ut labore et dolore magna aliqua. 
   Ut enim ad minim <firstName/>, quis nostrud exercitation ullamco <firstName/> nisi ut aliquip ex ea commodo consequat.'

2. Write code that finds all the numbers in below text. Write to console how many numbers there are.
 'Lorem3 ipsum 45 dolor sit amet, 5consectetur adipisicing_99 elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim ven3iam, quis nostrud exercitation ull_88_amco laboris nisi ut aliquip ex ea com36modo 183 consequat.'
*/