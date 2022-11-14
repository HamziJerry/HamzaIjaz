/*
Question 1
-- Write a function that accepts an array of string and check all of following;
  -- if it's a number save that number to a new list.
  -- if it's a single character 'c' remove the last number from the list.
  -- if it's a single character 'd' double the last number from the list.
  -- if it's a special charcter '+' add the last two number from the list.
  -- when array is finished take sum all the number from the list and show in console.
 */

  const checkArray = (arr) => {
    console.log(arr);
    let newList = arr.map((el) => {
      if(Number(el) === +el)
        return +el;
    }).filter((el) => el !== undefined);
    console.log(newList);

    arr.forEach(el=> {
      if(el === 'c') {
        newList.pop();
      } else if (el === 'd') {
        let double = newList[newList.length - 1]**2;
        newList.push(double);
      } else if (el === '+') {
        if(newList.length >= 2){
          let sum = newList[newList.length - 1] + newList[newList.length - 2];
          newList.push(sum);
        }
      }
    });
    console.log(newList);
    console.log(`Sum of new list: ${newList.reduce((total,el) => { return total + el})}`);
  }

  checkArray(['4','5','c','d','+']);