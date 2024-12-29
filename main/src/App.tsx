import React from 'react';
import './App.css';
import PathPlanner from './PathPlanner/PathPlanner';
import AutoPlanner from './AutoPlanner/AutoPlanner';
import AutoConfig from './AutoPlanner/AutoConfig/AutoConfig';
import PathConfig from './PathPlanner/PathConfig/PathConfig';

function App() {
  const [onPath, setOnPath] = React.useState(false);
  return (
    <div className="App">
      {onPath ? <PathPlanner path={onPath} setPath={setOnPath}/> : <AutoPlanner onPath={onPath} setOnPath={setOnPath} />}
      {/* {onPath ? <PathConfig onPath={onPath} setOnPath={setOnPath}/>: <AutoConfig onPath={onPath} setOnPath={setOnPath} actionList={["A", "B", "C"]}/>} */}
    </div>
  );
}

export default App;
