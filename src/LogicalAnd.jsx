import React from 'react'
import { createRoot } from 'react-dom/client';
// Logical && Operator
function Car(props) {
  return (
    <>
    { props.brand && <h1>My car is a {props.brand}</h1> }
    </>
  );
}
export default Car