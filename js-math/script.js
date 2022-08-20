// Math.round(x) returns the value of x rounded to its nearest integer
// if value is .4 and below return its previous nearest number
console.log("The round value is "+Math.round(4.4));
// if value is .5 and above retur its next nearest number
console.log("The round value is "+Math.round(4.5));

// Math.ceil() rounds a number next nearest integer
console.log("The ceil() value is "+Math.ceil(4.1));

// Math.floor(x) returns the previous its nearest integer
console.log("The floor() value is "+Math.floor(4.6));
console.log("The floor() value is "+Math.floor(-4.6));

// Math.trunc(x) returns the integer part of value
console.log("The trunc () value is "+Math.trunc(5.8));
console.log("The trunc () value is "+Math.trunc(-4.2));

// Math.sign(x) returns if x is negative, null or positive:
// if any + value then return its +1
// if any - value then return its -1, if 0 then return 0
console.log("If value is + then return "+Math.sign(5));
console.log("If value is - then return "+Math.sign(-5));
console.log("If value is 0 then return "+Math.sign(0));

// Math.pow(x, y) returns the value of x to the power of y
console.log("The power of value is "+Math.pow(5,3));

// Math.sqrt(x) returns the square root of x
console.log("The square root value is "+Math.sqrt(64));

// Math.abs(x) returns the absolute (positive) value of x
console.log("The absolute return positive value "+Math.abs(-5.8));

// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians)
// If you want to use degrees instead of radians, you have to convert degrees to radians
// Angle in radians = Angle in degrees x PI / 180.
console.log("The sin() value is "+Math.sin(1));

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
console.log("The cos() value is "+Math.cos(1));

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
console.log("The lowest value is "+Math.min(0, 150, 30, 20, -8, -200));
console.log("The highest value is "+Math.max(0, 150, 30, 20, -8, -200));

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log("The random value between 0 to 1 "+Math.random());

// Math.log(x) returns the natural logarithm of x.
console.log("The log value is "+Math.log(1));

// Math.log2(x) returns the base 2 logarithm of x.
console.log("The log2 value is "+Math.log2(8));

// Math.log10(x) returns the base 10 logarithm of x.
console.log("The log10 value is "+Math.log10(1000));