import React from "react"

export default function Items({name,done,checkHandler,id, deleteHandler}) {
   
  return(
    <div style={{textDecoration:(done? "line-through":"")}}  >
    <div className="checker" style={{margin:20}}><span className=""><input type="checkbox" checked={done}  onChange={e=>checkHandler(id,e.target.checked)} /></span>
    <span>    {name}</span>
    <button className="btn btn-primary" style={{float:"right"}} onClick={()=>deleteHandler(id)}>X</button>
    </div>
</div>
  )
}

// className={"todo-item" + (done? 'complete': "")}