import ActionList from "./ActionList/ActionList";
import Field from "./AutoField/Field";
import AutoFormer from "./AutoFormer/AutoFormer"
import PathList from "./PathList/PathList";
import { Dispatch, SetStateAction, useState } from "react";

function AutoPlanner({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {

  const [auto, setAuto] = useState<((string | number)[] | number[][])[]>([]);

  return (
    <div className="AutoPlanner">
      <header className="Auto-header">AutoPlanner
        <Field Auto={auto}/>
        <AutoFormer onPath={onPath} setOnPath={setOnPath} />
        <PathList Pathlist={[["PathOne", [[1, 1, 0], [200, 200, 60]]]]} auto={auto} setAuto={setAuto}/>
        <ActionList actionlist={["a", "b"]} auto={auto} setAuto={setAuto}/>
      </header>
    </div>
  );
}

export default AutoPlanner;
