/*
Question 3
-- Write a function that accepts two arguments one is an array of numbers and second is a number.
  -- check whether in the array have got valid pair of number exists which if we calculate sum it will be that second argument number otherwise return 'no valid pair exists for this num'.
  -- hint: validate([1,5,1,4,8], 9) => 'Pair with a given sum 9 is (5, 4)'
*/

function validate(arr, num) {
  for (i = 0; i < arr.length -1; i++) {
      for (j = (i + 1); j < arr.length; j++) {
          if (arr[i] + arr[j] === num) {
              return `Pair with a given sum ${num} is (${arr[i]}, ${arr[j]})`;     
          }
      }
  }
  return `no valid pair exists for this num ${num}`;
}

// console.log(validate([1,5,1,4,8], 9));
console.log(validate([9,2,5,7,6], 16));