import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { Product } from "../../interface/Product";

const CardsData2 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const onMount = async () => {
      try {
        const itemsCollection = collection(db, "bodyLifeItems");
        const snapshot = await getDocs(itemsCollection);

        const items = snapshot.docs.map((data) => ({
          id: data.id,
          ...data.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    onMount();
  }, []);

  
  return (
   <></>
  )
};

export { CardsData2 };
