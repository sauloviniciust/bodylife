import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Item } from "../../components/Item";

export const ItemPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");
  const product = queryParams.get("product");
  const about = queryParams.get("about");
  const price = queryParams.get("price");

  useEffect(() => {
    // Use os valores aqui como necessário
    console.log("Valores do Card:", { src, product, about, price });
  }, [src, product, about, price]);

    return(
  
    <Item src={src} product={product} about={about} price={price}/>
    
   
    )
}
