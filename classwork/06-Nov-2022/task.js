// Task 1 => Write a method that reverse a String?

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("Javascript"));

// Task 2 => Write a method that reverse a number?

const reverseNumber = (num) => +num.toString().split("").reverse().join("");

console.log(reverseNumber(322956));
