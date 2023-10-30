import { Link } from "react-router-dom";
import { useCartStore } from "../../store/CartStore";

export const Card = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
 
  ]);

 

  return (
    <>
      {items.map((item) => (
        <section key={item.id}
          className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 
          border-zinc-600 scale-75 md:scale-90 lg:scale-90 xl:scale-100 
          transition overflow-hidden ease-in-out delay-100 text-center 
          z-10 transform hover:scale-105 border-2 shadow-2xl">
          <>
            <Link
            
              to={`/item?src=${item.src}
                      &product=${item.product}
                      &about=${item.about}
                      &item=${item.item}
                      &price=${item.price}
                      &alt=${item.alt}
                      &id=${item.id}`}>

              <img className="h-auto" src={item.src} alt={item.alt} />

            </Link>

            <div className="flex font-bold flex-col gap-5 p-4 text-black">
              <h3 className="text-xl">{item.product}</h3>

              <p className="text-zinc-300">{item.about}</p>

              <div className="flex gap-5 rounded-2xl hover:bg-zinc-700">
                <button className="text-2xl"onClick={sub}>-</button>
                <h1 className="text-yellow-400 text-2xl">{item.units}</h1>
                <button className="text-2xl"onClick={add}>+</button>
            </div>
                          
              <h1>R${item.price}</h1>
            </div>
          </>
          <button className="mt-2 bg-zinc-950 font-semibold
                hover:bg-zinc-600 text-zinc-200 py-2 
                hover:text-black inline-block px-4 rounded"
            onClick={() => {addToCart(item);}}>Adicionar</button>
        </section>
      ))}
    </>
  );
};
