import React,{useReducer} from "react";
function Counter1(){
    function reducer(state,action){
        switch (action.type){
            case "Increment" : return {count : state.count+1};
            case "Decrement" : return {count : state.count-1};
            case "IncrementByTwo" : return {count : state.count+2}
            case "Reset" : return {count : 0};
            default : return state;
        }
    }
    const [state,dispatch] =useReducer(reducer,{count : 0});
    return (
        <div style={{textAlign:"center" ,marginTop:"50px"}}>
            <h2>Count : {state.count}</h2>
            <button onClick={()=>dispatch({type:"Increment"})}>➕ Increment</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>➖ Decrement</button>    
            <button onClick={()=>dispatch({type:"IncrementByTwo"})}>➕ Increment By Two</button>    
            <button onClick={()=>dispatch({type:"Reset"})}>🔁 Reset</button>
        </div>
    )
} 
export default Counter1