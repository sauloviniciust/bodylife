import { create } from 'zustand';
import { CartStore } from '../interface/CartStore';
import { cardsData } from '../components/cardsData/CardsData';

const LoadCartFromStorage = () => {
  
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Erro ao carregar o carrinho', error);
    return [];
  }
};

export const useCartStore = create<CartStore>((set,) => ({
  
    cart: LoadCartFromStorage(),
    availableItems: cardsData,
    
    addToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { ...newItem, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }
    }),

    removeFromCart: (index: number) =>
        set((state) => {
            const updatedCart = state.cart.filter((_, i) => i !== index);
            if (updatedCart.length !== state.cart.length) {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return { cart: updatedCart };
            } else {
                return state;
            }
        }),
        updateQuantity: (id: string, quantity: number) =>
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
    }));