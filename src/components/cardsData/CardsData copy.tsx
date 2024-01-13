import { collection, getDocs, getFirestore,  } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const CardsCopy = () => {
const [products, setProducts] = useState([])

useEffect(() => {
  const onMount = async () => {
      const db = getFirestore();

  
     const itemsCollection = collection(db, 'bodyLifeItems');

     const item = await getDocs(itemsCollection);

      item.docs.map(data => {
        console.log("itemsCollection", data.data())
      })
      getDocs(itemsCollection).then((snapshot) => {
        snapshot.docs.map(data =>{
          setProducts(data.data())
          console.log(data.data())
          console.log(products)
        })
      })
      
    };
    
    onMount();
  }, []);

  return (
    <div>
      {products.map(item => (
        <div key={item.id}>
          {/* Renderize os dados conforme necessário */}
          <img src={item.src} alt={item.alt} />
          <h2>{item.product}</h2>
          <p>{item.about}</p>
          <p>Price: ${item.price}</p>
          {/* Adicione mais informações ou ações conforme necessário */}
        </div>
      ))}
    </div>
  );

};
