
// 1 . Write a program that show tables with numbers
// from 1-10?

const table = document.querySelector('.table');

const generateTableMarkup = (num) => {
  let html = `<h1>Table of ${num}</h1>`;
  for(let i=1; i<=10; i++){
    html += `<p>${number} x ${i} = ${num * i}</p>`;
  }
  return html;
}

const number = +prompt('Enter An Interger To Generate Table: ');

table.innerHTML =  (number) ? generateTableMarkup(number) : "<h1>Invalid Value: Reload To Enter Proper Value<h1>";