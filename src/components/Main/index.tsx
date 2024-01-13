import { useEffect, useState } from "react";
import { Card } from "../Cards";
import { Loading } from "./../Loading";
import { cardsData } from "../cardsData/CardsData";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Main = () => {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    const onMount = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "bodyLifeItems");

        const snapshot = await getDocs(itemsCollection);

        const items = snapshot.docs.map((data) => ({id: data.id, ...data.data()}));
        console.log(items)
        
        setProducts(items)
        console.log(products)
       
        // items.map((item) =>
        //   );
     
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    onMount();
  }, []);

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
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((item) => (
              <Card key={item.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Main };
