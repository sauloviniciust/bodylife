import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

// Define o tipo para o estado do carrinho
interface CartState {
  cart: string[]; // ou o tipo apropriado para os itens do carrinho
}

// Define as ações que podem ser realizadas no carrinho
interface CartAction {
  type: string;
  payload: string;
}

// Defina um contexto para o carrinho
const CartContext = createContext<{ cartState: CartState; dispatch: Dispatch<CartAction> } | undefined>(undefined);

// Defina o estado inicial do carrinho
const initialState: CartState = {
  cart: [],
};

// Defina o redutor do carrinho
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

// Provedor do contexto do carrinho
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Utilize useReducer para controlar o estado do carrinho
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do carrinho em componentes
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
