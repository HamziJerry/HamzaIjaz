import Card from './Card';

const Childs = (props) => {
  return(
    <div>
      <h2>CHILDS</h2>
      <div className="row">
        {props.childrens.map((child) => {
          return(<Card key={child.name} name={child.name} profession={child.profession} relation={child.relation} />);
        })}
      </div>
  </div>
  );
}

export default Childs;