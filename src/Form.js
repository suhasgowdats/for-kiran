import React, { useState } from "react"

export default function Form({onSubmit}) {
    const [task, settask] = useState("")
    return (
        <div>
            <form onSubmit={(event)=>event.preventDefault}>
                <input type="text" className="form-control add-task" placeholder="New Task..." value={task} onChange={(e)=>{settask(e.target.value)}} onKeyPress={(e)=>{
                       if(e.key==="Enter"&& task.length>0){
                            onSubmit(task)
                            settask("")
                       }
                }}/>
            </form>
        </div>
    )
}
