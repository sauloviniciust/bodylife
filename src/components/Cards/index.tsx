import { Link } from "react-router-dom";
import { useCartStore } from "../../store/CartStore";
import { Counter } from "../Counter";

export const Card = () => {
  const [items] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);
  return (
    <>
      {items.map((item) => (
        <section
          key={item.id}
          className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 
          border-zinc-600 scale-75 md:scale-90 lg:scale-90 xl:scale-100 
          transition overflow-hidden ease-in-out delay-100 text-center 
          z-10 transform hover:scale-105 border-2 shadow-2xl"
        >
          <>
            <Link
              to={`/item?src=${item.src}
                      &product=${item.product}
                      &about=${item.about}
                      &item=${item.item}
                      &price=${item.price}
                      &alt=${item.alt}
                      &units=${item.units}
                      &quantity=${item.quantity}
                      &id=${item.id}`}
            >
              <img className="h-auto" src={item.src} alt={item.alt} />
            </Link>

            <div className="flex font-bold flex-col gap-5 p-4 text-black">
              <h3 className="text-xl">{item.product}</h3>

              <p className="text-zinc-300">{item.about}</p>

              <h1>R$ - ${item.price}</h1>
            </div>
          </>
          <Counter item={item} />
        </section>
      ))}
    </>
  );
};
