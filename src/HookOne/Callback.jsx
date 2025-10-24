import React,{useState,useCallback} from 'react'
function Child({onClick}) {
    console.log("Child Component re-rendered");
    return <button onClick={onClick}>Click me</button>
}
//useCallback keeps the same function useless 
function Callback(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Button Clicked !")
    },[]); //No dependency -> same function always 
    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <Child onClick={handleClick} />
        </div>
    )
}
export default Callback;