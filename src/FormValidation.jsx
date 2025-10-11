import { useState } from "react";

function SimpleValidation(){
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState();
    const [error,setError]=useState("");
    const [error1,setError1]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    if(!email.includes("@") || number.length<10 || number.length>10){
        setError("Please enter a valid Email !");
        setError1("Please enter a valid Number !");
    } else{
        setError("")
        setError1("")
        alert(`Email Submitted : ${email} 
Number Submitted : ${number}`
        );
    }
};
return(
    <form onSubmit={handleSubmit}>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
    <br />
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
    <br />
    <button type="submit">Submit</button>
    {error && <p style={{color:"red"}}>{error}</p>}
    {error1 && <p style={{color:"red"}}>{error1}</p>}
    </form>
);
}
export default SimpleValidation