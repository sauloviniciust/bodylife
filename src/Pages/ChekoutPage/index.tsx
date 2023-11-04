import { Trash2 } from "lucide-react";
import { Total } from "../../components/Total";
import { useCartStore } from "../../store/CartStore";


export const Cart = () => {
  const items = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);



 
  return (
    <div className="container mx-auto my-56 p-4">
      <div className="grid grid-cols-1  gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-zinc-300  font-semibold mb-4">Resumo do Pedido</h2>
          
          <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li key={item.id} className="bg-zinc-700 flex justify-between items-center p-5 text-zinc-200">
              <img className="w-30 h-36" src={item.src} alt={item.alt} />
              <span className="w-36">{item.product}</span>
              <span>R$ {item.price}</span>
              <button className="hover:text-zinc-400" onClick={() =>{
                removeFromCart(index)
            }}>
                <Trash2 />
            </button>
            </li>
         
         ))} 
          </ul>
          <div className="mt-4 text-zinc-300">
            <span className="font-semibold">Total:</span>
            <span className="text-2xl font-bold"><Total/></span>
          </div>
        </div>
        
        

        <div className="bg-zinc-900 text-zinc-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Informações de Pagamento</h2>
         
          <form>
          
            <button className="bg-black text-zinc-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-800">
              Finalizar Compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};