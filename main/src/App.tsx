import React from 'react';
import './App.css';
import PathPlanner from './PathPlanner/PathPlanner';
import AutoPlanner from './AutoPlanner/AutoPlanner';
import PageChooser from './PageChooser/PageChooser';

function App() {

  console.log("hi");
  const [onPath, setOnPath] = React.useState(false);
  return (
    <div className="App">
      <PageChooser onPath={onPath} setOnPath={setOnPath}/>
      {onPath ? <PathPlanner/> : <AutoPlanner/>}
    </div>
  );
}

export default App;
