import React, { useState } from "react"

export default function Nav({onFilterchange}) {
    const nav=["All","Active","Completed"]
    const clickHandler=(currentValue)=>{
        onFilterchange(currentValue)
    }
  return(
    <ul className="nav nav-pills todo-nav">
     {
         nav.map(items=>{
            return(<li role="presentation" className="nav-item all-task active" onClick={()=>clickHandler(items)}><a href="#" className="nav-link" style={{cursor:"pointer"}}>{items}</a></li>)
         })
     }
    
</ul>
  )
}