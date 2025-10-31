import React from "react";
function Task() {
  function result(e){
     e.preventDefault();
    const input = document.getElementById("Input");
    const result = document.getElementById("result");
    const num = Number(input.value);
    if(!isNaN(num)){
      result.innerHTML = "Square: "+num*num;
    } else{
      result.innerHTML = "Enter a valid number";
    }
  }

  return(
    <div>
      <form onSubmit={result}>
        <label>Enter a number: </label>
        <input type="number" id="Input" />
        <button type="submit">OK</button>
      </form>
      <p id="result"></p>
    </div>
  );
}

export default Task;
