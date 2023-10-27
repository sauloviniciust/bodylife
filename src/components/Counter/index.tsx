import { useState } from "react";
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

    const handleProduct = () => {
        setNumero (numero + count)
        setCount(0);
     
    }

    return (
        <div className="flex flex-col font-bold align-middle items-center mx-auto">
            <div className="flex gap-5 rounded-2xl hover:bg-zinc-700">
                <button className="text-2xl"onClick={sub}>-</button>
                <h1 className="text-yellow-400 text-2xl">{count}</h1>
                <button className="text-2xl"onClick={add}>+</button>
            </div>
            <button onClick={handleProduct} className="mt-2 bg-zinc-950 font-semibold
       hover:bg-zinc-600 text-zinc-200 py-2 
       hover:text-black inline-block px-4 rounded">
        Adicionar</button>
       </div>
    )
}

export { Counter }
