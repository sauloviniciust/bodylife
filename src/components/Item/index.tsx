import { useLocation } from "react-router-dom";
import { Item } from "../../Pages/itemDetail";

export const ItemPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");
  const product = queryParams.get("product");
  const quantity = queryParams.get("quantity");
  const numericQuant = quantity !== null ? parseFloat(quantity) : 0;
  const about = queryParams.get("about");
  const price = queryParams.get("price");
  const numericPrice = price !== null ? parseFloat(price) : 0;
  const alt = queryParams.get("alt");

if (product !== null && src !== null && about !== null && price !== null&& alt !== null) {
  return (
    <Item
      product={product}
      src={src}
      about={about}
      price={numericPrice} 
      alt={alt} 
      quantity={numericQuant} 
      id={""} 
      item={""} 
      units={0}    />
  );
} else {
  return <p>Erro ao obter o item.</p>;
}}