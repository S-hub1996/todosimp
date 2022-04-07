import React,{useState} from "react"

export const Todo = () =>{
    const [task,setTask] = useState("")
    const [todo,setTodo] = useState([])
    const handleChange = (e)=>{
        setTask(e.target.value)
    }
    const handleClick = ()=>{
        setTodo([...todo,task]);
        setTask=("")
    }
    console.log(todo,"todo")
    return (
        <div className="mx-5 w-25 p-3">
        <h1 className="fw-bold">Todo</h1>
        <input className="form-control" type={"text"} value = {task} placeholder = "enter todo name" onChange={handleChange}/>
        <button className="btn btn-primary w-100 my-2" onClick={()=> handleClick()}>Add</button>
        {todo.map((item)=>{
            return <h1 className="text-muted">{item}</h1>
        })}
        </div>
    )
}
