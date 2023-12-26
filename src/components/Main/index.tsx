import { useEffect, useState } from "react";
import { Card } from "../Cards";
import { cardsData } from "../cardsData/CardsData";
import { Loading } from "./../Loading";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Main = () => {

  useEffect(() => {
    const onMount = async () => {
      const db = getFirestore();
      const collections = collection(db, "items");
      const fireData = await getDocs(collections)
 
      fireData.docs.map(data => {
        
        console.log(data.data());
      })

    getDocs(collections).then((snapshot) => {
      snapshot.docs.map(data => {
        console.log(data.data());
      })
    })
    
    }
      onMount();
  }, [])

  
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
              <Card key={item.id}  />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Main };
