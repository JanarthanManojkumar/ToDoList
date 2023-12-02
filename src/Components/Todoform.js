import React,{useState} from 'react'

export const TodoForm=({addTodo})=>{
    const [value,setValue] =useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();

        addTodo(value)

        setValue("")

    }
    return(
        <form action="" className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
            placeholder='what are we doing today' 
            onChange={(event)=>{
                setValue(event.target.value)
            }}/>

            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
       
    
}