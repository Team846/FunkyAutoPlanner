import ActionList from "./ActionList/ActionList";
import Field from "./AutoField/Field";
import AutoFormer from "./AutoFormer/AutoFormer"
import PathList from "./PathList/PathList";
import { Dispatch, SetStateAction, useState } from "react";

function AutoPlanner() {

  const [auto, setAuto] = useState<((string | number)[] | number[][])[]>([]);

  return (
    <div className="AutoPlanner">
      <header className="Auto-header">AutoPlanner
        <Field Auto={auto}/>
        <AutoFormer/>
        <ActionList actionlist={["a", "b"]} auto={auto} setAuto={setAuto}/>
        <PathList Pathlist={[["PathOne", [[1, 1], [2, 2]]]]} auto={auto} setAuto={setAuto}/>
      </header>
    </div>
  );
}

export default AutoPlanner;
