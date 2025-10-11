import React from 'react'
import { useState } from 'react'
function ControlledForm() {
  const [name,setName]=useState(""); //1st execution 5th execution

  const handleChange=(e)=>{ //4th execution
    setName(e.target.value);
    document.getElementById("result").innerText=e.target.value;
  };

  const  handleSubmit=(e)=>{ //7th execution
    e.preventDefault();
    alert(`Submitted Name : ${name}`);
  }
  return(
    <div>
        <form onSubmit={handleSubmit}>  
            <label>Enter your name : </label>
            <input type='text' value={name} onChange={handleChange}></input> 
            <button type='submit'>Submit</button>
        </form>
        <p id='result'></p>
    </div>
    );
}
export default ControlledForm