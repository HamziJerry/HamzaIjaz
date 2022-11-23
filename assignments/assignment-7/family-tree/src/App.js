import FamilyTreeObj from "./components/FamilyTreeObj";
import FamilyTree from "./components/FamilyTree";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Family Tree</h1>
      <FamilyTree familyTree={FamilyTreeObj} />
    </div>
  );
}

export default App;
