import './App.css';
import Form from './Form';
import Nav from './Nav';
import List from './List';
import { useState } from 'react';


function App() {
  const [filter,setfilter]=useState("All")
  const [newId, setNewid]=useState(3)
  const [tasks,settasks]=useState([
    {
      id:1,
      name:"Learn JS",
      done:true
  },
  {   
      id:2,
      name:"Learn React",
      done:false
    }
  ])
  const formSubmit=(value)=>{
    const newtask={
      id:newId,
      name: value,
      done:false
    }
    settasks([...tasks, newtask])
    setNewid(newId+1 )
  }
  const checkHandler=(id, checked)=>{
     settasks(tasks.map(item=>{
       return item.id===id?{...item, done:checked}: item;
     }))
  }
const onFilterchange=(newValue)=>{
     setfilter(newValue)
}
const filterTask=()=>{
  if (filter==="Active"){
    return tasks.filter(item=>item.done===false);
  }
  else if(filter==="Completed"){
    return tasks.filter(item=>item.done===true)
  }
  return tasks
}
const deleteHandler=(id)=>{
   settasks(tasks.filter(item=>item.id !== id))
}


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
               <Form onSubmit={formSubmit} />
               <Nav onFilterchange={onFilterchange} />
               <List tasks={filterTask()} checkHandler={checkHandler} deleteHandler={deleteHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
