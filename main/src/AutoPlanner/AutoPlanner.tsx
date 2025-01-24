import ActionList from "./ActionList/ActionList";
import Field from "./AutoField/Field";
import AutoFormer from "./AutoFormer/AutoFormer"
import PathList from "./PathList/PathList";
import { Dispatch, SetStateAction, useState } from "react";

function AutoPlanner({ onPath, setOnPath }: { onPath: boolean, setOnPath: Dispatch<SetStateAction<boolean>> }) {

  const [auto, setAuto] = useState<((string | number)[] | number[][])[]>([]);

  return (
    <div className="AutoPlanner">
      <header className="Auto-header">AutoPlanner
        <Field Auto={auto} />
        <AutoFormer onPath={onPath} setOnPath={setOnPath} />
        <PathList
          Pathlist={[
            ["Two Piece Path", [[1, 1], [2, 2]]],
            ["Two Piece Path", [[2, 2], [3, 3]]],
            ["Two Piece Path", [[3, 3], [4, 4]]],
            ["Two Piece Path", [[4, 4], [5, 5]]],
            ["Two Piece Path", [[5, 5], [6, 6]]]
          ]}
          auto={auto}
          setAuto={setAuto}
        />
        <ActionList actionlist={["Intake", "Shoot", "Extend", "Intake", "Shoot", "Extend"]} auto={auto} setAuto={setAuto} />
      </header>
    </div>
  );
}

export default AutoPlanner;
