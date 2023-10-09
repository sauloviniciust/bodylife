
import { useLocation } from "react-router-dom";
import { Item } from "../../components/Item";

export const ItemPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const src = queryParams.get("src");
  const product = queryParams.get("product");
  const about = queryParams.get("about");
  const price = queryParams.get("price");
  const alt = queryParams.get("alt");

if (product !== null && src !== null && about !== null && price !== null&& alt !== null) {
  return (
    <Item
      product={product}
      src={src}
      about={about}
      price={price} alt={alt}    />
  );
} else {
  return <p>One or more variables are null.</p>;
}}
