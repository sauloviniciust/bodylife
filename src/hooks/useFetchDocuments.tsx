import { ReactNode, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";


export const useFetchProducts = (
    docCollection: unknown, search = null, uid = null) => {
        const [products, setProducts] = useState<ReactNode>();
      
        //leak
        const [cancelled, setCancelled] = useState(false);

        useEffect(() => {
             
            async function loadData() {
             
                const itemsCollection = collection(db, "bodyLifeItems");

                try {
                    let q 

                    //busca
                    //dash


                    q = await query(itemsCollection);

                    await onSnapshot(q, (querySnapshot) => {

                        setProducts(
                            querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
                        )
                    });
                 
                } 
                
                catch (error) {
                    console.log(error);
               
                }
                
            }

                loadData();

        }, [docCollection, search, uid, cancelled])

        useEffect(() =>{
            return () => setCancelled(true); 
        },[])
        return { products };
    };
