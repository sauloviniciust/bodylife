import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../../store/CartStore";
import { Product } from "../../interface/Product";
interface CounterProps {
  item: Product;
}

function Counter({ item }: CounterProps) {
  const [addToCart, updateQuantity] = useCartStore((state) => [
    state.addToCart,
    state.updateQuantity,
  ]);

  const [quantity, setQuantity] = useState<number>(0);

  const add = () => {
    if (quantity < 5) {
      setQuantity((value) => value + 1);
      addToCart(item);
      updateQuantity(item.id, quantity + 1);
    }
  };

  const sub = () => {
    if (quantity > 0) {
      setQuantity((value) => value - 1);
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <div className="flex justify-center mb-5">
      <div className="flex justify-center w-20 rounded-2xl">
        {quantity > 0 && (
          <div className="flex gap-3">
            <button
              className="mt-2 bg-zinc-950 font-semibold rounded py-2 
                  text-zinc-200 px-4 hover:bg-zinc-600 inline-block 
                  hover:text-black"
              onClick={sub}
            >
              {quantity === 1 ? <Trash2 /> : "-"}
            </button>

            <h1 className="text-zinc-200 text-xl mt-3">{quantity}</h1>
          </div>
        )}
        <button
          className="mt-2 ml-3 bg-zinc-950 font-semibold rounded 
              text-zinc-200 px-4 hover:bg-zinc-600 inline-block 
              hover:text-black py-2"
          onClick={add}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export { Counter };
