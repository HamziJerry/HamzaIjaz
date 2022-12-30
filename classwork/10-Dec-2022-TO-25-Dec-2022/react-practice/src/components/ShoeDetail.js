import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ScaleLoader} from "react-spinners";


const ShoeDetail = () => {
  const [state, setState] = useState({});
  const {id} = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    try{
      setLoading(true);
      const response = await fetch(`http://localhost:8000/shoes/${id}`);
      const data = await response.json();
      setState(data);
      setLoading(false);
      // console.log(data);
      // console.log(state);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    }

  }

  if(loading) {
    return(
      <div className="center mt-4">
        <ScaleLoader color="#ccddd9"/>
      </div>
    );
  }
  
  return(
    <div className="center mt-4">
      <h1 className="text-light">{state.name}</h1>
      <p className="text-danger">{state.price}</p>
    </div>
  );
}

export default ShoeDetail;