import Card from "./Card";

const Parents = (props) => {
  return(
    <div>
      <h2>PARENTS</h2>
      <div className="row">
        {props.parents.map((parent) => {
          return(<Card key={parent.name} name={parent.name} profession={parent.profession} relation={parent.relation} />);
        })}
      </div>
    </div>
    );
   }

export default Parents;