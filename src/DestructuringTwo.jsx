import React from "react";
function Car1(props){
    const {brand,model}=props;
    return(
        <h2>I love my {brand} {model}</h2>
    );
}
export default Car1