import { Dispatch, SetStateAction, useState } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import "./AutoFormer.css"

function AutoFormer({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
    const [autoList, setAutoList] = useState<string[]>(["go forward", "go back", "jump", 'climb', 'dance', 'hop']);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.dataTransfer.setData('ItemIndex', index.toString())
    }
    const handleDrop = (e:React.DragEvent<HTMLDivElement>, index:number) => {
      const ItemIndex = parseInt(e.dataTransfer.getData("ItemIndex"));
      if (ItemIndex === index) return;
      const newList = [...autoList];
      const [deletedItem] = newList.splice(ItemIndex, 1);
      newList.splice(index, 0, deletedItem);
      setAutoList(newList);
    }
    const enableDropping = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };
    
    return (
      <div className="AutoFormer">
        <header className="Auto-former-header">
          <div className="header">
            <div className="create-path" onClick={()=>{}}> Create Auto</div>
            <PageChooser onPath={onPath} setOnPath={setOnPath} />
            <div className="save-path" onClick={()=>{}}>Save Auto</div>
          </div>
        </header>
        
        <div className="creator-box">
          <p>Creator</p> 
          <div className="auto-box" onDragOver={enableDropping} > 
          {autoList.length > 0 ? (
            autoList.map((item, index) => {
              return (
                <div key={item}>
                  <div
                    className="drop-zone"
                    onDrop={(e) => handleDrop(e, index)}
                  >
                  </div>
                  <div
                    className="Action"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setAutoList((prevList) =>
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
          {autoList.length === 0 && (
            <div
              className="drop-zone"
              onDragOver={enableDropping}
              onDrop={(e) => handleDrop(e, autoList.length)}
            >
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }
  
  export default AutoFormer;
  