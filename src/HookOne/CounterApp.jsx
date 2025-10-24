import React, { useContext } from 'react'
import UseCounter from './UseCounter'
function CounterApp() {
    const {count,increment,decrement,reset}=UseCounter(5); //starts from 5
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterApp;