import { useState } from "react";
import { Button } from "../Buttons";
import { useCart } from "../../context/cartContext";

interface IProps {
  id: string; 
  src: string;
  alt: string;
  image: React.ReactNode;
  product: string;
  about: string;
  price: string;
  units: number;
}

function Counter ({id, src, alt, image, product, about, price, units }: IProps) {


    const {setNumero, numero} = useCart();
    const {setItem, item} = useCart();
    
    
    const ItemToCHeckout = {id, src, alt, image, product, about, price, units}
    
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
        ItemToCHeckout.units= count
        setNumero (numero + count)
        setCount(0);
        setItem(ItemToCHeckout)
        console.log(item)
       
    }

    return (
        <div className="flex flex-col font-bold align-middle items-center mx-auto">
            <div className="flex gap-5 rounded-2xl hover:bg-zinc-700">
                <button className="text-2xl"onClick={sub}>-</button>
                <h1 className="text-yellow-400 text-2xl">{count}</h1>
                <button className="text-2xl"onClick={add}>+</button>
            </div>
            <a onClick={handleProduct}><Button children="Adicionar"/></a>
       </div>
    )
}

export { Counter }

