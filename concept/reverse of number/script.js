// print reverse of a number
const num =parseInt(prompt('enter the number'));
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));