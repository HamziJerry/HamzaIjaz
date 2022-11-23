import GrandChildren from "./GrandChildren";

const Children = (props) => {
  return(
    <div className="children">
            <h3>{props.count} : {props.child.name}</h3>
            <p>
              <strong>Profession:</strong> <em>{props.child.profession}</em>
            </p>
            <p>
              <strong>Relation:</strong> <em>{props.child.relation}</em>
            </p>
            <h4>Spouse</h4>
          <p>
            <strong>Name:</strong> <em>{props.child.spouse.name}</em>
          </p>
          <p>
            <strong>Profession:</strong> <em>{props.child.spouse.profession}</em>
          </p>
          <p>
            <strong>Relation:</strong> <em>{props.child.spouse.relation}</em>
          </p>
          <p>
            <strong>{props.child.grandChildrens.totalGrandChilds} Child: </strong> <em>{props.child.grandChildrens.totalGrandSons} Son & {props.child.grandChildrens.totalGrandDaughters} Daughter</em>
          </p>
          <h4>Grand Childrens</h4>
            <h5>Sons</h5>
            {props.child.grandChildrens.grandSons.map((grandSon, index) => {
              return( <GrandChildren grandChild={grandSon} key={index} count={index + 1} />);
            })}
            <h5>Daughters</h5>
            {props.child.grandChildrens.grandDaughters.map((grandDaughter, index) => {
              return( <GrandChildren grandChild={grandDaughter} key={index} count={index + 1} />);
            })}
          </div>
  );
}

export default Children;