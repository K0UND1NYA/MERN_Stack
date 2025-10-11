import {React , useState} from 'react'
function TwoWayBinding() {
    const [message,setMessage]=useState("Hello");
  return (
    <div>
        <input 
        type='text' value={message} onChange={(e)=>setMessage(e.target.value)}>
        </input>
        <p>You Typed : {message}</p>
    </div>
  )
}

export default TwoWayBinding