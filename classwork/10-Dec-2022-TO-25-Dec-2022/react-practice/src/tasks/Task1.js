import { useState } from "react";
import TaskCard from "./components/TaskCard";


const Task1 = () => {
  const [bg, setBg] = useState('white');
  const [cardColors, setcardColors] = useState([
    {color: 'white' , background: 'magenta'},
    {color: 'white' , background: 'black'},
    {color: 'black' , background: 'yellow'},
    {color: 'white' , background: 'green'},
    {color: 'black' , background: 'cyan'},
    {color: 'white' , background: 'brown'},
  ])

  return(
    <div className="center" style={{marginTop: '1.2em'}}>
      <div
        className="card text-center"
        style={{
          background: `${bg}`,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "50vw",
        }}
      >
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            {
              cardColors.map((el) => {
                return(
                  <TaskCard color={el.color} background={el.background} updateState={(data)=> {setBg(data)}} />
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task1;