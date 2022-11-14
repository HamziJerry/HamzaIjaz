// ==  : check value  i.e  2 == '2'  => true
// === : check both type and value  i.e 2 === '2' => false because type not same

// Higher Order Functions => A function which accept function as an argument and also return function

const radius = [2, 3, 5, 6];

// Problem of code repeating
// const calculateArea = () => radius.map(el => Math.PI*(el**2));
// const calculateCircumference = () => radius.map(el => 2*Math.PI*el);
// const calculateDiameter = () => radius.map(el => 2*el);

// console.log(calculateCircumference());
// console.log(calculateArea());
// console.log(calculateDiameter());

// Solution to apply DRY principle

const area = (radius) => Math.PI*(radius**2);
const circumference = (radius) => 2*Math.PI*radius;
const diameter = (radius) => 2*radius;

const calculate = (arr, params) => arr.map(el => params(el));

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Function Statement
// Function Declartion
function funName(param) {  }

// Function Expression
const anotherFunc = () => {return 'hamza'};
console.log(anotherFunc());

// Anonymous Function
// A function without name is anonymous function
// function () {}
// () => {}

// Named Function Expression
const func1 = function () {  }
const func2 = () => {}


// Difference between Parameters & Arguments
function func3(num)  // num is parameter: parameter is used to get the argument passed in function call
{  
  return num**2;
}
func3(2) // 2 is argument : argument use as value to pass in function call

// First class functions
// first class functions means in JS function is treated like value
const greet = (name) => `Welcome ${name}🙂!`;
// greet store function as value we can pass it in function argument access as parameter or also used as variable whenever needed we call it.

// Arrow Funcitons
const add = (num1, num2) => num1 + num2;