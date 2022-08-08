// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ['Dog', 'Tiger', 'Penguin', 'Lion','Dog'];

console.log(animals.lastIndexOf('Dog'));
// output: 3

console.log(animals.lastIndexOf('Tiger'));
// output: 1

// If the element is not in the array then display the value is -1
console.log(animals.lastIndexOf('wolf'));
// output: -1