import  { createContext, useContext, useReducer } from 'react';

// Defina um contexto para o carrinho
const CartContext = createContext();

// Defina as ações que podem ser realizadas no carrinho
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
  // Estado inicial do carrinho
  const initialState = {
    cart: [], // Array que armazenará os itens no carrinho
  };

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
