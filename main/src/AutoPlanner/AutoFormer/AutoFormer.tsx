import { Dispatch, SetStateAction, useState } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import "./AutoFormer.css"
import { PointToBeMade } from "../../PathPlanner/PathField/Field";

function AutoFormer({onPath, setOnPath, createAuto, name, setName, saveAuto, namedAutoList, setNamedAutoList, autoList, setAutoList}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>, createAuto:Function, name:string, setName:Dispatch<SetStateAction<string>>, saveAuto:Function, namedAutoList:string[], setNamedAutoList:Dispatch<SetStateAction<string[]>>, autoList:(string|number[]|PointToBeMade[])[], setAutoList:Dispatch<SetStateAction<(string|number[]|PointToBeMade[])[]>>}) {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.dataTransfer.setData('ItemIndex', index.toString())
    }
    const handleDrop = (e:React.DragEvent<HTMLDivElement>, index:number) => {
      const ItemIndex = parseInt(e.dataTransfer.getData("ItemIndex"));
      if (ItemIndex === index) return;

      const newNamedList = [...namedAutoList];
      const newList = [...autoList];
      const [deletedNamedItem] = newNamedList.splice(ItemIndex, 1);
      const [deletedItem] = newList.splice(ItemIndex, 1)

      let nearestPathCoords = null
      for (let i = index-1; i>=0; i--){
        const item = newList[i]
        if (Array.isArray(item) && item[item.length-1] instanceof PointToBeMade){
          nearestPathCoords = item[item.length-1]
          break;
        }
      }
      if (Array.isArray(deletedItem) && typeof deletedItem[0] === "string"){
        const endCoord = nearestPathCoords;
        if (endCoord instanceof PointToBeMade){
        deletedItem[1] = endCoord.CordX
        deletedItem[2] = endCoord.CordY;
        }
      }
      newNamedList.splice(index, 0, deletedNamedItem);
      newList.splice(index, 0, deletedItem);
      setNamedAutoList(newNamedList);
      setAutoList(newList);
    }
    const enableDropping = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    return (
      <div className="AutoFormer">
        <header className="Auto-former-header">
          <div className="header">
            <div className="create-path" onClick={()=>{createAuto()}}> Create Path</div>
            <PageChooser onPath={onPath} setOnPath={setOnPath} />
            <div className="save-path" onClick={()=>{saveAuto()}}>Save Auto</div>
            <input className="auto-namer" value={name} onChange={evt => setName(evt.target.value)} placeholder="Auto Name here"/>
          </div>
        </header>
        
        <div className="creator-box">
          <p>Creator</p> 
          <div className="auto-box" onDragOver={enableDropping} > 
          {namedAutoList.length > 0 ? (
            namedAutoList.map((item, index) => {
              return (
                <div key={item}>
                  <div
                    className="drop-zone"
                    onDrop={(e) => handleDrop(e, index)}
                  >
                  </div>
                  <div
                    className="auto-part"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setNamedAutoList((prevList) =>
                        prevList.filter((e, i) => i !== index)
                      );
                    }}
                  >
                    {item}
                  </div>
                </div>
              );
            })
          ) : (
            <span className="box-desc">Drag an auto to get started</span>
          )}
          {namedAutoList.length === 0 && (
            <div
              className="drop-zone"
              onDragOver={enableDropping}
              onDrop={(e) => handleDrop(e, namedAutoList.length)}
            >
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }
  
  export default AutoFormer;
  