import "./Action.css"

function Action({x, y, actionName} : {x:number, y:number, actionName:string}) {
    return (
      <div 
        className="Action"                 
        style={{
          left: `${x+0.6}%`,
          top: `${y-2.5}%` 
        }}
      >
        {actionName}
      </div>
    );
  }
  
  export default Action;
  