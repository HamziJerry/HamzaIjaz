// function hamza() {
//   var obj = 123;
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// hamza();
/************************************
 +++++++++++++Objects++++++++++++++++
 *************************************/

// const student = {
//   name: "Hamza Ijaz",
//   email: "hamzi42692@gmail.com",
//   age: 24,
//   address: {
//     city: "Rawalpindi",
//     country: "Pakistan",
//   },
// };

// console.log(
//   `I am ${student.name} and my age is ${student.age}. My email address is (${student.email}) and I live in ${student["address"]["city"]}, ${student.address.country}.`
// );

// const Employee = {
//   id: 1,
//   name: "Hamza",
//   company: "Google Headquarters",
//   companyAddress: {
//     city: "Mountain View",
//     country: "California",
//   },
//   address: {
//     city: "Rawalpindi",
//     country: "Pakistan",
//   },
//   salary: 100000,
// };

// console.log(
//   `Employee Company Address: ${Employee.companyAddress.city}, ${Employee.companyAddress.country}.`
// );
// console.log(
//   `Employee Address: ${Employee.address.city}, ${Employee.address.country}.`
// );

/************************************
 +++++++++++++Arrays++++++++++++++++
 *************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Remove last value from array and returns removed value
// console.log(numbers.pop());
// // Add value to array from end and returns added value
// console.log(numbers.push(10));
// // Remove first value from array and return removed value
// console.log(numbers.shift());
// // Add value to array from beginining and returns new legth of array
// console.log(numbers.unshift(1));
// console.log("////////////////");

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

console.log(numbers.find((num) => num === 10));
