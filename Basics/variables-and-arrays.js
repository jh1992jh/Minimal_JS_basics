// VARIABLES
// const variables can't be reassigned
// E.g. const name = "Chad" after delclaration would cause an error
const name = "Jani";

// let variables can be assigned
let instrument = "Guitar";
// This doesn't cause an error because let variables can be ressigned
instrument = "Bass";

// Arrays
const instruments = ["Guitar", "Bass", "Drums"];
console.log(instruments);
// Arrays are indexed, the first elements index is 0, the index of drums would be 2
// Indexes can be accessed with the [number] notation e.g. instruments[0] would be "guitar"
// console.log(instruments[0]);
// In JS arrays can have many different datatypes in them e.g.
const randomValues = ["Monkey", 123, true];

// Output "Chad" from the bandMembers array
const bandMembers = ["Ryan", "Daniel", "Chad", "Mike"];
// console.log(bandMembers[INDEX HERE]);

// Objects
const bandMember = {
  instrument: "Guitar",
  name: "Ryan",
  cool: true,
  band: "Nickelback",
};

// Objects have a key value pairs, they can be accessed with this notation bandMember.instrument. That would give you the value of "Guitar"
// Note object keys can also be accessed with this notation object["key e.g. name"]
const frontMan = {
  intruments: ["Guitar", "Vocals"],
  name: "Chad",
  cool: true,
  band: "Nickelback",
};

// Output the band of the frontMan object
// console.log(frontman.KEYHERE)
// Output the vacals from the frontMan Object

// Common array methods
const newArray = [];
// console.log("newArray before push: ", newArray);
// There are immutable and mutable array methods, immutable simply means that the method doesn't modify the original array instead created a new copy of it, mutable modifies the original array

// push is a mutable array method, it adds element/elements to the end of the array
// newArray.push("Bananas");
console.log("newArray after push: ", newArray);

// concat is a immutable array method so it doesn't modify the original array instead creates a new copy of it.
newArray.concat("Bananas again");
// console.log("newArray after concat: ", newArray);
const anotherArray = newArray.concat("Bananas again");
// console.log("anotherArray: ", anotherArray);

// indexOf tells the index of an element in an array, if the element is not found in the array it outputs -1
// console.log(bandMembers.indexOf("Mike")); // outputs a 3
// console.log(bandMembers.indexOf("James")); // outputs a -1

// There are lots of different array methods but those three should give a decent idea how they work.
// You can google JS array methods to learn more

// Looping
for (let i = 0; i < 100; i++) {
  // Starting point, condition, increment the iterator
  // outputs numbers from 0 to 99
  //   console.log(i);
}

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    // outoputs even numbers from 0 to 99
    // console.log(i);
  }
}

// If statements
// if(condition) {
// Do something if the condition is true
// }
if (frontMan.cool) {
  //   console.log("The frontman is cool");
}

// If the first statement is not true
if (!frontMan.cool) {
  //   console.log("The frontman is not cool");
} else {
  // do this
  //   console.log("The frontman is cool");
}

if (!frontMan.intruments[1] === "Bass") {
  // If first statment is true do this
  //   console.log("The frontman plays bass");
} else if (
  frontMan.intruments[0] === "Guitar" &&
  frontMan.intruments[1] === "Vocals"
) {
  // Checks if another condition is true
  // Note you can add as many else if blocks as you want but the order matters, the first statement that is true in a if statement will be executed
  //   console.log("The frontman plays guitar and sings");
} else {
  // If none of the conditions are true do this
  //   console.log("The frontman doesn't play any instruments");
}
