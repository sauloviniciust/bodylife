import { useState } from "react";

function Chart () {

    const [count,] = useState<number>(0);

    return <h1 className=" text-yellow-400 text-sm ">{count}</h1>
        
    
}

export { Chart }