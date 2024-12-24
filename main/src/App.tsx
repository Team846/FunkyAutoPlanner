import React from 'react';
import './App.css';
import PathPlanner from './PathPlanner/PathPlanner';
import AutoPlanner from './AutoPlanner/AutoPlanner';
import PageChooser from './PageChooser/PageChooser';
import PathConfig from './PathPlanner/PathConfig/PathConfig';
import AutoConfig from './AutoPlanner/AutoConfig/AutoConfig';

function App() {
  const [onPath, setOnPath] = React.useState(false);
  return (
    <div className="App">
      {onPath ? <PathPlanner/> : <AutoPlanner/>}
      {onPath ? <PathConfig onPath={onPath} setOnPath={setOnPath}/>: <AutoConfig onPath={onPath} setOnPath={setOnPath}/>}
    </div>
  );
}

export default App;
