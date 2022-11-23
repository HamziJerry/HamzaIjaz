import Children from "./Children";

const GrandParent = (props) => {
  return(
    <div className="grandParent">
          <h2>{props.grandParent.name}</h2>
          <p>
            <strong>Profession:</strong> <em>{props.grandParent.profession}</em>
          </p>
          <p>
            <strong>Relation:</strong> <em>{props.grandParent.relation}</em>
          </p>
          <h3>Spouse</h3>
          <p>
            <strong>Name:</strong> <em>{props.grandParent.spouse.name}</em>
          </p>
          <p>
            <strong>Profession:</strong> <em>{props.grandParent.spouse.profession}</em>
          </p>
          <p>
            <strong>Relation:</strong> <em>{props.grandParent.spouse.relation}</em>
          </p>
          <p>
            <strong>{props.grandParent.childrens.totalChilds} Child: </strong> <em>{props.grandParent.childrens.totalSons} Son & {props.grandParent.childrens.totalDaughters} Daughter</em>
          </p>
          <h3>Childrens</h3>
          <h5>Sons</h5>
          {props.grandParent.childrens.sons.map((son, index) => {
            return(<Children child={son} key={index} count={index + 1}  />);
          })}
          <h5>Daughters</h5>
          {props.grandParent.childrens.daughters.map((daughter, index) => {
            return(<Children child={daughter} key={index} count={index + 1} />);
          })}
        </div>
  );
}

export default GrandParent;