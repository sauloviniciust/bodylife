import { useState } from "react";

function Counter () {

    const [count, setCount] = useState<number>(0);

    const add = () => {
        setCount((value) => value + 1)
    }

    const sub = () => {
        setCount((value) => value - 1)
       
    }


    return (
        <div className="flex justify-center">
            <div className="flex justify-center w-20 gap-5 rounded-2xl hover:bg-zinc-700">
                <button   onClick={sub}>-</button>
                <h1  className=" text-yellow-400 text-lg ">{count}</h1>
                <button onClick={add}>+</button>
            </div>
       </div>
    )
}



export { Counter }