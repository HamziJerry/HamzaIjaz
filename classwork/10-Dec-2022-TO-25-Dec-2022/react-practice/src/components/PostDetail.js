import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ScaleLoader} from "react-spinners";

const PostDetail = () => {
  const [state, setState] = useState({});
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    try{
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
      <h1 className="text-light">{state.title}</h1>
      <p className="text-danger">{state.body}</p>
    </div>
  );
}

export default PostDetail;