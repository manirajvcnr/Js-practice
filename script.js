// Add two numbers
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Sub two numbers
let n1=10;
let n2=5;
let sub=n1-n2;
console.log('The sub of value is '+ sub)

// Multiplication
let mul=n1*n2;
console.log("The multiplication value is="+ mul);

// Division
let div=n1/n2;
console.log('The div value is '+div);

// Array 
let attentance=["a","b","c"];
// position
console.log('The position of 0 is '+ attentance[0]);
console.log('The position of 1 is '+ attentance[1]);
console.log('The position of 2 is '+ attentance[2]);

//Insert value into Position
attentance[5]="f";
console.log(attentance); 

// Prototype
// array unshift
// adds a new element to the beginning of an array and returns the new length of an array
attentance.unshift("d");
console.log(attentance);

// array push
// aads a new element to the end of an array and returns the new length of an array
attentance.push("e");
console.log(attentance);

// Array pop
// removes the last element of an array and returns the removed element
attentance.pop();
console.log(attentance);

// Array shift
// removes the first element of an array and returns the removed element
attentance.shift();
console.log(attentance);

// Array Slice
// selects(remove) the part of an array and returns the new array
let roll=attentance.slice(1);
console.log(roll);

// Array sort
// sorts the elements alphabetically in strings and in ascending order
let rollnumbers=['Maniraj','Deepan','Jenifer','Sanjay','Harish','Karthik','Arun','Mariselvam','Vairam'];
rollnumbers.sort();
console.log(rollnumbers);

// Array Splice
// removes or replaces existing elements and/or adds new elements
attentance.splice(4,1,'add');
attentance.splice(5,1,'again');
console.log(attentance);

// Array indexof
// searches an element of an array and returns its position
console.log(attentance.indexOf('add'));

// Array lastindexof
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// it is output for rollnumbers.sort() ['Arun', 'Deepan', 'Harish', 'Jenifer', 'Karthik', 'Maniraj', 'Mariselvam', 'Sanjay', 'Vairam']
console.log(rollnumbers.lastIndexOf('Maniraj'));

// Array tostring
// The toString() method returns a string representing the specified array and its elements.
console.log(attentance.toString());

// Function
// Multiplication
function fun(a,b){
    return a*b;
}
let c=fun(5,4);
console.log(c);

// comparison
function great(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
let g=great(8,4);
console.log(g);

// if elseif else
function bigger(n1,n2,n3){
    if(n1>n2){
        return n1;
    }
    else if(n2>n1){
        return n2;
    }
    else{
        return n3;
    }
}
let n=bigger(18,39,6);
console.log('The bigger no is '+n)

// swap numbers
let s1,s2,temp;
function swap(s1,s2,temp){
    s1=s2;
    s2=temp;
    temp=s1;
}