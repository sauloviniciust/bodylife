import { createContext, useState, useContext } from "react";
interface IProps {
  id: string; 
  src: string;
  alt: string;
  image: React.ReactNode;
  product: string;
  about: string;
  price: string;
}

interface ICart {
  numero: number;
  setNumero: (value: number) => void;
  item: string;
  setItem: (value: IProps) => void;
}

export const CartContext = createContext<ICart>({
  numero: 0,
  setNumero: () => null,
  item: "",
  setItem: () => null
  
});

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [numero, setNumero] = useState<number>(0);
  const [item, setItem] = useState<string>('');

  return (
    <CartContext.Provider value={{ numero, setNumero, item, setItem }} >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart };
export { CartProvider };
