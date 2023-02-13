import React from 'react'
import "../header/header.css"
import { useState } from 'react' 
import Taskbar from '../taskbar/Taskbar'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='header'>
        <h1 className='task-tracker'>TASK TRACKER</h1>
        <button onClick={() => setShow(!show)} className='add-taskbar'>SHOW ADD TASK BAR</button>
        {show && <Taskbar/>}
        
    </div>
  )
}

export default Header