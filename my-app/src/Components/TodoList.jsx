import React from 'react';
// import {useState} from 'react';
import {nanoid} from 'nanoid';
import TodoItem from "./TodoItem";
const TodoList=()=>{

    const [task,setTask]= React.useState("");
    const [todo,setTodo]= React.useState([]);
// const [isLoggedIn,setLoggedIn]=useState(false)


    const handleChange=(e)=>{
        setTask(e.target.value)
    }

    const handleClick=()=>{
        let taskObj={
            id:nanoid(),
            title:task,
            status:false, 
        }
        setTodo([taskObj,...todo]);
    }

const handleDelete=(id)=>{
// console.log(id);

let newTodo = todo.filter((item)=>item.id !=id);
setTodo(newTodo);

}
// const handleLogIn=(id)=>{
//     setLoggedIn(true);
// }
// const handleLogOut=(id)=>{
//     setLoggedIn(false);
// }
// if(!isLoggedIn){
//     return (<>
//     <h1>User not logged in</h1>
//     <button onClick={handleLogIn()}>Login</button>
//     </>)
// }
// const handleToggle=(id)=>{

// }
    return (
<>
<h1 className="fw-bold">Todo</h1>
        <div className=" w- d-flex m-auto ">
{/* <button onClick={handleLogOut}>LOG OUT</button> */}

        <input className="form-control" type="text"
        value={task} placeholder="Enter Task" 
        onChange={handleChange}/>


        <button className="btn-primary btn w-100 mx-2 " onClick={handleClick}>Add Todo</button>
        </div>

        <div>
        {todo.map((item)=>{
           return <TodoItem Delete={handleDelete} key={item.id} {...item} />
          
        })}

        </div>
        

</>  
    )
}
export default TodoList;