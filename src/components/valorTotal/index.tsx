import { useCartStore } from "./../../store/CartStore";

export const Total = () => {
  const items = useCartStore((state) => state.cart);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <h1 className="text-zinc-300">
      {totalItems === 0 ? (
        "Carrinho vazio"
      ) : (
        <>
          {totalItems} - {formatter.format(sum)}
        </>
      )}
    </h1>
  );
};
