// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// syntax
// arrayname.slice(start-index,end-index)
// Slice
const animals = ['bear', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
//animals= ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
//animals= ["camel", "duck"]

console.log(animals.slice(2, 3));
//animals= ["camel"]

console.log(animals.slice(1, 5));
//animals= ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//animals= ["duck", "elephant"]

console.log(animals.slice(2, -1));
//animals= ["camel", "duck"]

console.log(animals.slice(2, 0));
//animals= [] length 0

console.log(animals.slice(2, 2));
//animals= [] length 0

console.log(animals.slice());
//animals= ["ant", "bison", "camel", "duck", "elephant"]
