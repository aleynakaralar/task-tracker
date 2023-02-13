import React from 'react'
import { useState } from 'react';
import "../taskbar/taskbar.css"

const Taskbar = () => {
    const [task, setTask] = useState("");
    const [day, setDay] = useState("");
    const [tasks, setTasks] = useState([]);
    
  
    
    const addItem = () => {
      const item = {
       id : Math.floor(Math.random()*1000),
       value : [task, day]
      };
      
      setTasks((tasks) => [...tasks, item]);
      setTask("");
      setDay("");
    
      console.log(task)
      console.log(day)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      
    }; 
    

     return (
       <div>
       <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label><br />
          <input type="text" name="task" id="task" placeholder="Add Task" value={task}
            onChange={(e) => setTask(e.target.value) }
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Date && Time</label><br />
          <input type="datetime-local" name="day" id="day" value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit" onClick={() => addItem()}>
            Save Task
          </button>
        </div>
      </form>
        <div className="showContainer" >
        <div className='added'>
        <ul>
       {tasks.map(item => {
        return <li key={item.id}> {item.value}</li>
       })}
      </ul>
        </div>
        </div>
      </div>
    
  )
}

export default Taskbar