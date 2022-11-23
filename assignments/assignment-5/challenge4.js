
// 4. Write a program that accepts string of multiple
// words, abbreviate the string and return the word
// initials. (e.g. ‘Brendan Eich’ => BE).

const getAbbreviation = (str) => {
  const words = str.trim().split(' ');
  if(words.length <= 0 ) return;
  return words.map((word) => word.charAt(0).toUpperCase()).join('');
}

console.log(getAbbreviation('Brendan Eich'));
console.log(getAbbreviation('Hamza ijaz Ali'));