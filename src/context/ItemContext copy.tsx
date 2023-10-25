import { createContext, useState, useContext } from "react";
import { ICart } from "../interfaces/cartItem.interface";


interface IItem {
  
  item: object;
  setItem: (value: ICart) => void;
}

export const ItemContext = createContext<IItem>({
 
  item: {},
  setItem: () => null
  
});

interface IItemProviderProps {
  children: React.ReactNode;
}

const ItemProvider = ({ children }: IItemProviderProps) => {
  const [item, setItem] = useState<ICart[]>([]);

  return (
    <ItemContext.Provider value={{ item, setItem }} >
      {children}
    </ItemContext.Provider>
  );
};

const useItem = () => useContext(ItemContext);

export { useItem };
export { ItemProvider };