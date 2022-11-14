// console.log(a);

console.log(student);
var student = "Hamza";
console.log(student);

// Temporal Dead Zone:  before line execution of let and const declaration line of code is tdz for that declared variable

let a = 10;
console.log(a);

// Objects 

const employee = {
  id: 1,
  name: "Hamza Ijaz",
  address: {
    city: "rawalpindi",
    country: "pakistan",
    uniAddress: {
      city: "rawalpindi",
      country: "pakistan",
      streedAddress: {
        streetNumber: "23A",
        appartmentNumber: 1
      }
    },
    getAddress(){
      return `${this.city}, ${this.country}`;
    },
    addr: () => {
      return this;
    }
  }
}

// console.log(employee.phone); //undefined
console.log(employee.address.uniAddress.streedAddress.appartmentNumber);

console.log(employee.address.getAddress());

console.log(employee.address.addr());


