// number ascending
let ascend=[10,80,65,47,32,98];

ascend.sort(function(a,b){return a-b});
console.log(ascend);

// number descending
ascend.sort(function(a,b){return b-a});
console.log(ascend);

// string ascending
let string=['f','e','b','c','a','d'];

string.sort();
console.log(string);

// string descending
string.sort((a,b)=>b.localeCompare(a));
// string.sort().reverse();
// string.sort((a, b) => (a > b ? -1 : 1))
console.log(string);

