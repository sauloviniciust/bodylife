import { useEffect, useState } from "react";

import { cardsData } from "../cardsData/CardsData";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";
import { LoadingPage } from "../../Pages/Loading";

import { Roupa } from "../CardFilter/Roupa";

const Roupas = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  return (
    <section className="bg-zinc-800 py-12 mt-14">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-zinc-200 mb-6"></h2>
        {isLoading ? (
          <Loading/>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
              <Link 
                key={index}
                to={`/item?src=${card.src}
                    &product=${card.product}
                    &about=${card.about}
                    &price=${card.price}
                    &alt=${card.alt}
                    &id=${card.id}`}
              >
               {isLoading ? (
          <LoadingPage/>
        ) : ( 
                <Roupa {...card} />)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Roupas };
