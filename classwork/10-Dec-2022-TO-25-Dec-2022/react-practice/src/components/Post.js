import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ScaleLoader} from "react-spinners";

const Post = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getPost();
  },[]);

  const getPost = async () => {
    try{
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setUserData(data);
      setLoading(false);
      // console.log(userData);
      // console.log(data);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    }
  }

  const handleClick = (id) => {
      navigate(`/post-detail/${id}`);
  }

  if(loading) {
    return(
      <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
        <ScaleLoader color="#ccddd9" />
      </div>
    );
  }
  return(
    <div className="text-light center mt-2">
      <h1 className="mt-4">POSTS</h1>
        <ul className="list-group">
          {userData.map((el) => {
              return( 
                <li className="list-group-item mt-1 mb-1" key={el.id} style={{cursor: 'pointer'}} onClick={() => {handleClick(el.id)}}><span className="bold pe-2">{el.title}</span></li>
              );
          })}
        </ul>
    </div>
  );
}

export default Post;