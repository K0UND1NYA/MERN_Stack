//Lets create a simple counter hook that can use anywhere.
import {useState} from 'react'
//custom Hook to manage counter logic 
function UseCounter(initialValue=0) {
    const [count,setCount]=useState(initialValue);
    const increment=()=>setCount(initialValue+1);
    const decrement=()=>setCount(initialValue-1);
    const reset=()=>setCount(initialValue);
    //Return anthing you want to share 
    return {count,increment,decrement,reset};
}
export default UseCounter;