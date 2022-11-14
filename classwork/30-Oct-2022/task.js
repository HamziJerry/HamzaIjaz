/**************************************** 
++++++++++++++++Task1++++++++++++++++
*****************************************/

// const Addition = (num1, num2) => num1 + num2;
// const Substraction = (num1, num2) => num1 - num2;
// const Square = (num) => num * num;
// const Divide = (num1, num2) => num1 / num2;

// console.log(Addition(5, 2));
// console.log(Substraction(5, 2));
// console.log(Square(5));
// console.log(Divide(5, 2));

/**************************************** 
++++++++++++++++Task2++++++++++++++++
*****************************************/
/*
const Converter = (temp, check) => {
  return check === "C"
    ? `${1.8 * temp + 32}F\u00B0`
    : check === "F"
    ? `${(5 / 9) * (temp - 32)}C\u00B0`
    : "Format is not correct! 💥💥";
};

console.log(Converter(25, "C"));
console.log(Converter(125, "F"));
console.log(Converter(125, "D"));
*/

/**************************************** 
++++++++++++++++Task3++++++++++++++++
*****************************************/

const student = {
  name: "Hamza Ijaz",
  university: "PMAS Arid Agriculture University",
  calculatePercentage: (marks) => (marks / 1100) * 100,
};

console.log(student.calculatePercentage(780));
