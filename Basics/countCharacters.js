// Count how many times each character appears in the string, given as a param to the function
// Then output the character that appears the most, note it doesn't have to be case insensitive
// BONUS: Make it case insensitive, aka both a and A are counted as a

// Hints
// Is there a way you can change the string to a datatype to iterate over to?
// Is there a good datatype type where you can create keys?
// Is there a way to access those keys and change their values dynamically?

const countCharacters = (str) => {
  let highestCount = 0;
  let mostCommonCharacter = "";

  console.log(
    `The character that appears most in the string is "${mostCommonCharacter}" and it appears ${highestCount} times.`
  );
};

countCharacters("WhatEverYouWantToPutAsAStringHere");
