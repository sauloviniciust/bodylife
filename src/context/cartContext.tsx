import { createContext, useState, useContext } from "react";

interface ICart {
  numero: number;
  setNumero: (value: number) => void;
}

export const CartContext = createContext<ICart>({
  numero: 0,
  setNumero: () => null
  
});

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [numero, setNumero] = useState<number>(0);

  return (
    <CartContext.Provider value={{ numero, setNumero}} >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart };
export { CartProvider };
