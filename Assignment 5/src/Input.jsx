import { useState } from "react";

function Input(){
    const[input, setinput] = useState("")
   
    function handleInputChange(event){
        setinput(event.target.value);
        console.log(event.target.value)
    }
    return(


<div>
<input type="text" value={input} onChange={handleInputChange} placeholder="Enter Text"/>


</div>
        
        

       

       
    );
}
export default Input;