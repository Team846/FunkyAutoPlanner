import "./Action.css"

function Action({x, y, actionName} : {x:number, y:number, actionName:string}) {
    return (
      <div 
        className="Action"                 
        style={{
          left: `${x-.5}%`,
          top: `${y-1.5}%`
        }}
      >
        {actionName}
      </div>
    );
  }
  
  export default Action;
  