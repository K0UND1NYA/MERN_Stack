import React from 'react'

function Son(props) {
  return (
    <div style={{background:'lightgreen',padding:"10px",margin:"10px"}}>
        <h2>Son</h2>
        <div>{props.children}</div>
    </div>
  );
}
function Daughter({brand , model , children}) {
  return (
    <div style={{background:'lightblue',padding:"10px",margin:"10px"}}>
        <h2>Daughter {brand && `(${brand} ${model})`}</h2>
        <div>{children}</div>
    </div>
  );
}
function Parent() {
  return (
    <div>
        <h1>My Two Children</h1>
        <Son>
            <p>
                This was written in the parent component but displayed as part of son Component 
            </p>
        </Son>
        <Daughter brand="Samsung" model="S24 Ultra">
            <p>
                This was written in the parent component but displayed as part of daughter Component
            </p>
        </Daughter>
    </div>
  )
}
// prop drilling 
//conditional rendering
export default Parent