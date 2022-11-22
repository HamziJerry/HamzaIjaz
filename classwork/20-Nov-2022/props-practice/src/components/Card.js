
const Card = (props) => {
  return(
    <div className="card">
      <h3>{props.name.toUpperCase()}</h3>
      <p><strong>Relation:</strong> {props.relation.toUpperCase()}</p>
      <p><strong>Profession:</strong> {props.profession.toUpperCase()}</p>
    </div>
  );
}

export default Card;