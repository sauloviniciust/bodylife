import { useCartStore } from "../../store/CartStore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  const sum = items.reduce((acc, item) => acc + item.price, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resumo do Pedido</h2>
          {/* Listagem dos itens no carrinho */}
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.product}</span>
                <span>R$ {item.price}</span>
                <button onClick={() => {
                  removeFromCart(item.id);
                }}>
                  Remover do carrinho
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <span className="font-semibold">Total:</span>
            <span className="text-2xl font-bold">{formatter.format(sum)}</span>
          </div>
        </div>

        <div className="bg-zinc-500 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Informações de Pagamento</h2>
          {/* Adicione campos do formulário de pagamento aqui (número do cartão, data de validade, etc.) */}
          <form>
            {/* Campos do formulário de pagamento */}
            <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800">
              Finalizar Compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
