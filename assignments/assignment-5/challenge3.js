
// 3. Write a program that receives an array of
// numbers and returns one object containing two
// arrays, one is containing positive numbers and
// other is containing negative numbers. (e.g.
// {positive: [], negative: []}).

const seperatePositiveAndNegative = (arr) => {
  const positive = arr.filter((num) => num >= 0);
  const negative = arr.filter((num) => num < 0);
  return {
    positive,
    negative
  }
}

console.log(seperatePositiveAndNegative([1, 2, 4, -3, -5, 9, -2, 0]));