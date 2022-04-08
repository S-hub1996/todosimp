import React from 'react';
const TodoItem=(props)=>{
    // console.log(props)
    const {title,id,status,Delete}=props;
    return (
    <div className="mx-5 w-25 p-3">
    <h3 className="fw-bold m-25">{ title }</h3>
    <button className="btn-primary btn w-100 mx-2" onClick={()=>Delete(id)}>Delete</button>
    </div>
    )
}
export default TodoItem;