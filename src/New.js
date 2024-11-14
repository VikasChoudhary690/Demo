import { useState } from "react";



export const New= () => {
    let value = 0;
    const handleButtonclick = () =>{
         value++;
         console.log(value)
    };
    return (

        <>
           <h1>{value}</h1>
           <button onClick={handleButtonclick}>increment</button>
        </>

    );
};


       

// useState hooks sentex 


// const[count,setCount] = useState(0)