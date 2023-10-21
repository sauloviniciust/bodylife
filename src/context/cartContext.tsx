import { createContext, useState, useContext } from "react"

interface ICart {
    title:  string
    setTitle: (value: string) => void
}

export const CartContext = createContext<ICart>({
    title: "",
    setTitle: () => null,
});
interface ICartProviderProps {
    children: React.ReactNode
}

const CartProvider = ({children}: ICartProviderProps) => {
    const [title, setTitle] = useState<string>('');




return (
    <CartContext.Provider
    value={{
        title,
        setTitle
    }}
    >
        {children}
    </CartContext.Provider>
)
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }