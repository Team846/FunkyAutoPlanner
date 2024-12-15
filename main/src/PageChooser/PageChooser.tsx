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
      <div onClick={onPathClick}>Path</div>
      <div onClick={onAutoClick}>Auto</div>
    </div>
  );
}


export default PageChooser;
