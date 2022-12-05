import { useEffect, useState } from "react";

const DataRender = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 2000)
  }, []);

  const getUserData = async () => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = response.json();
      console.log(data);
      setState(data);
    } catch(error) {
      console.log("error", error.message);
    }
  }

  return(
    <div>
      {state.length > 0 ? 
      (state.map((el) => {
        return(
        <div>
            <h1>User Name: {el.name}</h1>
            <h1>User Address: {el.address.street}</h1>
            <h1>User Email: {el.email}</h1>
        </div>
      )})
      ) : (
        <p>Loading...</p>
      )
    }
    </div>
  );
}

export default DataRender;