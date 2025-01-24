import { Dispatch, SetStateAction } from 'react';
import './PageChooser.css'
function PageChooser({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
  const onPathClick = () =>{
    setOnPath(true);
    console.log("path-chooser active");
  };

  const onAutoClick = () =>{
    setOnPath(false);
    console.log("auto-chooser active");
  }

  return (
    <div className="PageChooser">
      <button className={`path-chooser ${onPath ? 'active' : ''}`} onClick={onPathClick}>Path</button>
      <button className={`auto-chooser ${!onPath ? 'active' : ''}`} onClick={onAutoClick}>Auto</button>
    </div>
  );
}


export default PageChooser;
