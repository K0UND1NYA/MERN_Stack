import React,{useMemo,useState} from "react";
function WithUseMemo(){
    const [count,setCount]=useState(0);
    function slowCalculation(num){
        console.log("Running Slow Calculation...");
        for(let i=0;i<1000000000;i++){}
        return num*5;
    }
    const result =useMemo(()=>slowCalculation(count,[count]));
    console.log(count);
    return (
        <div>
            <h3>Slow Result : {result}</h3>
            <button onClick={(()=>setCount(count+1))}>Increment</button>
        </div>
    )
}
export default WithUseMemo;