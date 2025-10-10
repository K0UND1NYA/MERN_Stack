import React from 'react'

function Parent1({studentNames}) {
  return (
    <div style={{background:'#d4f1f4',margin:'10px',padding:'10px'}}>
        <h2>Parent Component</h2>
        <Child studentNames={studentNames} />
    </div>
  );
}

function Child({studentNames}) {
  return (
    <div style={{background:'#a4ebf3',margin:'10px',padding:'10px'}}>
        <h3>Child Component</h3>
        <GrandChild studentNames={studentNames} />
    </div>
  );
}

function GrandChild({studentNames}) {
  return (
    <div style={{background:'#75e6da',margin:'10px',padding:'10px'}}>
        <h4>GrandChild Component</h4>
        <GreatGrandChild studentNames={studentNames} />
    </div>
  );
}
function GreatGrandChild({studentNames}) {
  return (
    <div style={{background:'#d4f1f4',margin:'10px',padding:'10px'}}>
        <h5>GreatGrandChild Component</h5>
        <p>
            👋 Hello <b>{studentNames}</b>,this value was passed from the Parent Component through 3 other components
        </p>
    </div>
  );
}
export default Parent1