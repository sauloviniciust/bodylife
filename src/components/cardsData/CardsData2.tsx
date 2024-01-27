import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase/config";
import { useData } from "../../Context/DataContext";

const CardsData2 = () => {
  const { setProduct } = useData();

  useEffect(() => {
    const onMount = async () => {
      try {
        const itemsCollection = collection(db, "bodyLifeItems");
        const snapshot = await getDocs(itemsCollection);

        const items = snapshot.docs.map((data) => ({
          id: data.id,
          ...data.data(),
        }));
        setProduct(items);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    onMount();
  }, [setProduct]);

  
  return (
   <></>
  )
};

export { CardsData2 };
