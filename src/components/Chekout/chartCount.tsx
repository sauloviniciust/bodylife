import { useCart } from "../../context/cartContext"

function Checkout () {
    const {item} = useCart();
    
    return<h1 className="text-yellow-400 text-sm ">{item}</h1>
        
}

export { Checkout }