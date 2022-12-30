import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {ScaleLoader} from "react-spinners";

const Shoes = () => {
  const {data, isLoading} = useQuery('shoes', () => 
  fetch('http://localhost:8000/shoes').then(res =>
    res.json()
  ));
  console.log(data, isLoading); 

  if(isLoading) {
    return(
      <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
        <ScaleLoader color="#ccddd9" />
      </div>
    );
  }
  return(
    <div className="text-light center mt-2">
      <h1 className="mt-4">Shoes</h1>
        <ul className="list-group">
          {data.map((el) => {
              return( 
               <Link className="link" to={`/shoe-detail/${el.id}`}><li className="list-group-item mt-1 mb-1" key={el.id}><span className="bold pe-2">{el.name}</span></li></Link>
              );
          })}
        </ul>
    </div>
);
}

export default Shoes;