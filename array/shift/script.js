const mynumber = ['0', '1', '2', '3'];

console.log('mynumber before:',mynumber);
// mynumber before: ['0', '1', '2', '3']

const shifted = mynumber.shift();

console.log('mynumber after:', mynumber);
// mynumber after: ['1', '2', '3']

console.log('Removed this element:', shifted);
// Removed this element: 0