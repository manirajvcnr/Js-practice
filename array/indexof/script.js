// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// array indexof
const mynumber = ['0', '1', '2', '3'];

console.log('index of 0 is ',mynumber.indexOf('0'));
// [0]

console.log('index of 1 is ',mynumber.indexOf('1'));
// [1]

console.log('index of 2 is ',mynumber.indexOf('2'));
// [2]

console.log('index of 3 is ',mynumber.indexOf('3'));
// [3]

// If the element is not in the array then display the value is -1
console.log('index of 4 is',mynumber.lastIndexOf('4'),'because it is not in the array');
// output: -1