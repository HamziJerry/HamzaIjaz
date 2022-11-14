/**************************************
+++++++++++++++OOP+++++++++++++++++++++
************************************** */

/* *********** FOUR PILLARS *********** */

/**************************************
+++++++++++++++Encapsulation++++++++++
************************************** */

// class important data not access from outside

/**************************************
+++++++++++++++Abstraction+++++++++++++
************************************** */
// View user related functionalites and hide the behind the scences functionalities that's not directly related to user interaction

/**************************************
+++++++++++++++Polymorphism++++++++++++
************************************** */
// Many Forms means same method with different arguments

/**************************************
+++++++++++++++Inheritance+++++++++++++
************************************** */
// Parent child relationship means child access the parent class properties and methods

/**************************************
+++++++++++++++Hoisting+++++++++++++++
************************************** */
// var and declarative function are hoisted means you can access them before their creation.

// console.log(a);
// var a = 22;
// console.log("js " + a);

// let a = 22;
// console.log(a, greet());
// console.log("js " + a);
// function greet() {
//   return "Welcome Hamza!";
// }

// const greet = () => "Welcome";

// console.log(arr);
// var arr = [2, 3, 5, 6];
// console.log(arr);

/**************************************
+++++++++++++++Destructuring+++++++++++
************************************** */

const student = {
  name: "Hamza",
  rollno: 42692,
  address: {
    city: "Rawalpindi",
    country: "Pakistan",
  },
  domicile: "Punjab",
};

const { name, rollno } = student;

console.log(name, rollno);

const fruits = ["apple", "banana", "mango", "grapes", "peach", "papaya"];

const [first, second, ...others] = fruits;

console.log(first, second, others);

/* *************************************
 +++++++++++++++CallBack Hell+++++++++++
 ************************************** */

 // function with in function is called callback hell