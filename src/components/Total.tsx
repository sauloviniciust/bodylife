import { useCartStore } from "../store/CartStore";

export const Total = () => {
  const items = useCartStore((state) => state.cart);

  const totalItems = items.length; // Obter a quantidade de itens no carrinho
  const sum = items.reduce((acc, item) => acc + item?.price, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <h1>
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