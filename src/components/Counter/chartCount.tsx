import { useState } from "react";
// import { Counter } from "./index";

function Chart () {

    const [count,] = useState<number>(0);

 


    return (
        <div>
               
                <h1  className=" text-yellow-400 text-sm ">{count}</h1>
          
                
                
       </div>
    )
}



export { Chart }