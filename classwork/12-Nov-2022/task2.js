/*
Question 2
-- Write a function that accepts an array of arrays and return the non repeating highest number
*/

// My solution
const uniqueHighestNumber = (arr) => {
  const nonReplica = arr.map(element => {
    return element.filter(ele => element.filter(el => el === ele).length === 1);
  });
  const highest = nonReplica.map((inner) => Math.max(...inner));
  const unique = [...new Set(highest)];
  return Math.max(...unique);
}

console.log(uniqueHighestNumber([[4,6,9,8],[1,4,7,5],[4,2,6,9],[4,2,6,10,10]]));

// Sir solution

const uniqueMax = (arr) => {
  let bigNum = 0;
  arr.forEach(element => {
    let nonReplica = element.filter(ele => element.filter(el => el === ele).length===1);
    let highestNumber = Math.max(...nonReplica);
    bigNum = Math.max(highestNumber, bigNum);
    // if (bigNum < highestNumber) {
    //   bigNum = highestNumber;
    // }
  });

  return bigNum;
}

console.log(uniqueMax([[4,6,9,8],[1,4,7,5],[4,2,6,9],[4,2,6,10,10]]));
