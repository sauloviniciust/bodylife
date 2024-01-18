// Cart.tsx
import { Trash2, PlusCircle, MinusCircle } from "lucide-react";
import { useCartStore } from "../../store/CartStore";
import { Total } from "../../components/valorTotal";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate

export const Cart = () => {
  const items = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const navigate = useNavigate(); // Obtenha a função navigate do hook useNavigate

  const handleCheckout = () => {
    // Adicione aqui a lógica para finalizar a compra
    // ...

    // Navegue para a página de checkout
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto my-56 p-4">
      <div className="grid grid-cols-1  gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-zinc-300 font-semibold mb-4">Resumo do Pedido</h2>
          
          <ul className="flex flex-col gap-5">
            {items.map((item, index) => (
              // Check if quantity is greater than 0 before rendering the item
              item.quantity > 0 && (
                <li key={item.id} className="bg-zinc-700 flex justify-between items-center p-5 text-zinc-200">
                  <img className="w-30 h-36" src={item.src} alt={item.alt} />
                  <span className="w-36">{item.product}</span>

                  <div className="flex gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <MinusCircle />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <PlusCircle />
                    </button>
                  </div>

                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  <button className="hover:text-zinc-400" onClick={() => removeFromCart(index)}>
                    <Trash2 />
                  </button>
                </li>
              )
            ))}
          </ul>
          
          <div className="mt-4 text-zinc-300">
            <span className="font-semibold">Total:</span>
            <span className="text-2xl font-bold"><Total /></span>
          </div>

          <button
            className="bg-black text-zinc-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
            onClick={handleCheckout}
          >
            Fechar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};
