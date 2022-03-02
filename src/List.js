import React, { useState } from "react"
import Items from "./Items"

export default function List({tasks, checkHandler, deleteHandler}) {
   return(
    <div className="todo-item">
        {
            tasks.map(item=>{
                return <Items key={item.id} name={item.name} done={item.done} checkHandler={checkHandler}
                id={item.id} deleteHandler={deleteHandler} />
            })
        }  
    </div>
   )
}