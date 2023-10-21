import { useState } from "react";
import { Button } from "../Buttons";
import { useCart } from "../../context/cartContext";

function Counter () {

    const {setNumero, numero} = useCart();

    const [count, setCount] = useState<number>(0);

    const add = () => {
        if(count < 5 ){
        setCount((value) => value + 1)
    }
}

    const sub = () => {
        if(count > 0 ){
        setCount((value) => value - 1)
       
    }}

    const handleNumber = () => {
        setNumero (numero + count)
    }


    return (
        <div className="flex flex-col font-bold align-middle items-center mx-auto">
            <div className="flex gap-5 rounded-2xl hover:bg-zinc-700">
                <button className="text-2xl" onClick={sub}>-</button>
                <h1 className=" text-yellow-400 text-2xl ">{count}</h1>
                <button className="text-2xl" onClick={add}>+</button>
            </div>
            <a href="#" onClick={handleNumber}><Button children="Adicionar" /></a>
       </div>
    )
}

export { Counter }