import Parents from './components/Parents';
import Childs from './components/Childs';
import Family from './components/Family';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <Parents parents={Family.parents} />
      <Childs  childrens={Family.childs}/>
    </div>
  );
}

export default App;
