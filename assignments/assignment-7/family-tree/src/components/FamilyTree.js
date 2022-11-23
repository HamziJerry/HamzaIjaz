import GrandParent from "./GrandParent";


const FamilyTree = (props) => {
  return(
    <div className="familyTree">
        <GrandParent grandParent={props.familyTree.grandParent} />
      </div>
  );
}

export default FamilyTree;