
// 2. Write a program that returns an array as well as
// the sum of all prime numbers greater than 25
// and less than 99.
const checkPrime = (num) => {
  if(num < 1) {
    return false;
  } else {
    for(let i = 2; i < num; i++ ){
      if(num % i === 0)
        return false;
    }
    return true;
  }
}

const getPrimeArrayAndSumObj = (num1, num2) => {
  let allNumbers = [];
  for(let i= num1; i<= num2; i++ ) allNumbers.push(i);
  const primeArr = allNumbers.filter((num)=> checkPrime(num));
  const primeSum = primeArr.reduce((sum, num) => sum+= num);
  return {
    primeArr,
    primeSum
  }
}

console.log(getPrimeArrayAndSumObj(25, 99));