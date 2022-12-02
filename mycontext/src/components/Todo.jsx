import React from 'react'
import './Todo.css'

export const Todo = ({id, title, content, dispatch}) => {


  const handleComplete = (id) => {
      dispatch({ type: "COMPLETED", payload: id });
  };

  return (
    <div key={id} className='todoContainer'>
        <div>
            <h2 style={{margin: '0px', lineHeight: '1'}}>{title}</h2>
            <p style={{marginTop: '10px', marginBottom: '0px'}}>{content}</p>
        </div>
        <button onClick={() => handleComplete(id)} className="btnDone">+</button>
    </div>
  )
}
