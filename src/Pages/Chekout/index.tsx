
import { ToastContainer, toast } from "react-toastify";
import { useCartStore } from "../../store/CartStore";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const cartItems = useCartStore((state) => state.cart);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const notify = () => toast("Compra Realizada com sucesso!!");

  return (
    <div className="container mx-auto my-56 p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-zinc-300 font-semibold mb-4">
            Resumo do Pedido
          </h2>

          <ul className="flex flex-col gap-5">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-zinc-700 flex justify-between items-center p-5 text-zinc-200"
              >
                <img className="w-30 h-36" src={item.src} alt={item.alt} />
                <span className="w-36">{item.product}</span>

                <div className="flex gap-3">
                  <span>{item.quantity}</span>
                </div>

                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-zinc-300">
            <span className="font-semibold">Total: </span>
            <span className="text-2xl font-bold">R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Informações de Pagamento
          </h2>

          <form>
            <button
              className="bg-black text-zinc-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
              onClick={notify}
            >
              Finalizar Compra
            </button>
          </form>
              <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
