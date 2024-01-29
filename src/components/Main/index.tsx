import { useEffect, useState } from "react";
import { Card } from "../Cards";
import { Loading } from "./../Loading";
import { useData } from "../../Context/DataContext";

const Main = () => {
  const { product } = useData();
  const [isLoading, setIsLoading] = useState(true);
  console.log(product);
 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className=" py-12 mt-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-zinc-200 mb-6"></h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card />
          </div>
        )}
      </div>
    </section>
  );
};

export { Main };
