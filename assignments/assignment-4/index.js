const zero = (params) => (params ? params(0) : 0);
const one = (params) => (params ? params(1) : 1);
const two = (params) => (params ? params(2) : 2);
const three = (params) => (params ? params(3) : 3);
const four = (params) => (params ? params(4) : 4);
const five = (params) => (params ? params(5) : 5);
const six = (params) => (params ? params(6) : 6);
const seven = (params) => (params ? params(7) : 7);
const eight = (params) => (params ? params(8) : 8);
const nine = (params) => (params ? params(9) : 9);

const divide = (params) => (params1) => params1 / params;
const times = (params) => (params1) => params1 * params;
const plus = (params) => (params1) => params1 + params;
const minus = (params) => (params1) => params1 - params;

console.log(five(times(two())));

console.log(nine(times(nine())));

console.log(nine(plus(seven())));

console.log(seven(minus(two())));

console.log(six(divide(three())));