// let x,a=parseInt(prompt('enter the positive value')),b=parseInt(prompt('enter the positive value')),c=parseInt(prompt('enter the negative value'));

// x=-b+(Math.sqrt((b*b)-4*a*c))/(2*a);
// console.log('The formula is + value ',x);

// let y,a1=parseInt(prompt('enter the negative value')),b1=parseInt(prompt('enter the positive value')),c1=parseInt(prompt('enter the positive value'));
// y=-b1-((Math.sqrt((b1*b1)-4*a1*c1))/(2*a1));
// console.log('The formula is - value ',y);

let a=prompt('enter the value is'),b=prompt('enter the value is'),c=prompt('enter the value is');
let d=(b*b)-(2*a*b);

let x=-b+(Math.sqrt(d))/(2*a);
let y=b-(Math.sqrt(d))/(2*a);

console.log(x);
console.log(y);