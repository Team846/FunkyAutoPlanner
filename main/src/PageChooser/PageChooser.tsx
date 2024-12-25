import { Dispatch, SetStateAction } from 'react';


function PageChooser({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {

  const onPathClick = () =>{
    setOnPath(true);
  };

  const onAutoClick = () =>{
    setOnPath(false);
  }

  return (
    <div className="PageChooser">
      <button onClick={onPathClick}>Path</button>
      <button onClick={onAutoClick}>Auto</button>
    </div>
  );
}


export default PageChooser;
