import { useState } from "react"

const FunctionComponent = () => {
  const [count, setCount] = useState(0); // zero;

  return(
    <div>
      <h1>{count === 0 ? "Zero" : count}</h1>
      <button onClick={() => setCount(count => count - 1)} >-</button>
      <button onClick={() => {setCount(count => count + 1)}} >+</button>
      <button onClick={() => {setCount(0)}} >Reset</button>
    </div>
  );
}

export default FunctionComponent;