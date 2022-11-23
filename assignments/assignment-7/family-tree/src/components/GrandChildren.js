
const GrandChildren = (props) => {
  return(
    <div className="grandChildren">
              <h4>{props.count} : {props.grandChild.name}</h4>
              <p>
                <strong>Profession:</strong> <em>{props.grandChild.profession}</em>
              </p>
              <p>
                <strong>Relation:</strong> <em>{props.grandChild.relation}</em>
              </p>
            </div>
  );
}

export default GrandChildren;