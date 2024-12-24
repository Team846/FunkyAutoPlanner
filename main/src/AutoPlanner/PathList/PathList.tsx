
const PATH_NAMES = [
  {name: 'Two Piece Path'},
  {name: 'Two Piece Path'},
  {name: 'Two Piece Path'},
  {name: 'Two Piece Path'},
]
function PathList() {
    return (
      <div className="PathList">
        <header className="Path-List-header">All Paths</header>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {PATH_NAMES.map((v, i) => {
            return (
              <button>
                <span>{v.name}</span>
                <span>:</span>
              </button>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default PathList;
  