const frnds = ["Sharjeel", "Mehtab", "Nabeel", "Asad", "Wajahat"];

const flag = true;

function greet() { 
  return `Welcome🙂!`;
 }


const GreetFrnds = () => { 
  return(
      <p>{flag ? `${greet()} \n ${frnds.join(' ')}`: `No frnds ☹`}</p>
  );
 }

 export default GreetFrnds;