import { Dispatch, SetStateAction } from 'react';
import './PageChooser.css'

function PageChooser({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {

  const onPathClick = () =>{
    setOnPath(true);
  };

  const onAutoClick = () =>{
    setOnPath(false);
  }

  return (
    <div className="PageChooser">
      <button className="path-chooser" onClick={onPathClick}>Path</button>
      <button className="auto-chooser" onClick={onAutoClick}>Auto</button>
    </div>
  );
}


export default PageChooser;
