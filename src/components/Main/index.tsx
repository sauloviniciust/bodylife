import { useEffect, useState } from "react";
import { Card } from "../Card";
import { cardsData } from "../cardsData/CardsData";


const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando um atraso de 2 segundos
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId); // Limpar o timeout se o componente for desmontado antes do atraso terminar
    };
  }, []);

  
  
  return (
    <section className="bg-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-zinc-200 mb-6">Produtos</h2>
        {isLoading ? (
  <div className="flex justify-center items-center h-64">
    <div className="relative h-10 w-10">
      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-200 opacity-75"></div>
      <div className="relative inline-flex rounded-full h-10 w-10 bg-zinc-800"></div>
    </div>
  </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
             <a href="item"> <Card key={index} {...card} /></a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Main };
