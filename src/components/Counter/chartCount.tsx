import { useCart } from "../../context/cartContext"

function Chart () {
    const {numero} = useCart();
    
    return<h1 className="text-yellow-400 text-sm ">{numero}</h1>
        
}

export { Chart }