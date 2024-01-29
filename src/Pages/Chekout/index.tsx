import { useCartStore } from "../../store/CartStore";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { PayForm } from "../../components/PayForm";

const Checkout = () => {
  const items = useCartStore((state) => state.cart);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const cartItems = useCartStore((state) => state.cart);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-56 p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-zinc-300 font-semibold mb-4">
            Finalizar Compra
          </h2>

          <ul className="flex flex-col gap-5">
            {cartItems.map(
              (item, index) =>
                item.quantity > 0 && (
                  <li
                    key={item.id}
                    className="bg-zinc-700 flex justify-between items-center p-5 text-zinc-200"
                  >
                    <img className="w-30 h-36" src={item.src} alt={item.alt} />
                    <span className="w-36">{item.product}</span>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <MinusCircle />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <PlusCircle />
                      </button>
                    </div>

                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      className="hover:text-zinc-400"
                      onClick={() => removeFromCart(index)}
                    >
                      <Trash2 />
                    </button>
                  </li>
                )
            )}
          </ul>

          <div className="mt-4 text-zinc-300">
            <span className="font-semibold">Total: </span>
            <span className="text-2xl font-bold">R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <PayForm
          items={items}
          total={`RS-${total.toFixed(2)}`}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};

export default Checkout;
