import React, { useState } from 'react'
import './App.css'
function App() {
  const [title, settitle]=useState('')
  const [desc, setdesc]=useState('')
  const [mainTask,setmainTask]=useState([])
  const taskHandler=(e)=>{
    e.preventDefault() // using for stoping form submission
    if(title==="" || desc==="" ){
      alert("please fill the all fields");
    }else{

    
    setmainTask([...mainTask,{title,desc}])
    setdesc('')
    settitle('')
    console.log(mainTask)
    }
  }
 

  let renderTask= <h2>No Task Available</h2>
  if(mainTask!==''){

    renderTask=mainTask.map((v,i)=>{
      return  <li key={i}>
       <div  style={{display:"flex",justifyContent:'space-around'}}>
        <h1>{v.title}</h1>
        <h1>{v.desc}</h1>
      <button onClick={()=>{deleteHandler(i)}}>delete</button>
       {/* // isko function m isliye diya taki ye apne aap call na kare */}
      <button onClick={()=>{editHandler(v,i)}}>Edit</button>

      </div>
        </li>
    })
 }
 
 function deleteHandler(i){
  let copytask=[...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
 }

 function editHandler(v,i){
  // console.log(v,i)
settitle(v.title);
setdesc(v.desc)
const task=[...mainTask];
task.splice(i,1)
setmainTask(task)
  
 }
  return (
    <>
    <h4 className='todo_list'>Trial Todo-List</h4>
    <form onSubmit={taskHandler}>
      <label htmlFor="task">Enter Your task : </label> &nbsp;
      <input type="text" placeholder='Enter task here' className='todo_input' id='task' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
      <label htmlFor="des">Enter Your description : </label> &nbsp;
      <input type="text" placeholder='Enter task here' className='todo_input' id='des' value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
      <button type='submit' id='task'>Add Task</button>
    </form>
    <hr  style={{marginTop:'20px'}}/>
    <div className='todo_output'>
      <ul>
        {
          renderTask
        }
      </ul>
    </div>
    </>
  )
}

export default App