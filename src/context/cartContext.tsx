import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';


interface CartState {
  cart: string[];
}
interface CartAction {
  type: string;
  payload: string;
}

const CartContext = createContext<{ cartState: CartState; dispatch: Dispatch<CartAction> } | undefined>(undefined);


const initialState: CartState = {
  cart: [],
};


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

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
