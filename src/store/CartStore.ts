import { create } from 'zustand';
import { cardsData } from '../components/cardsData/CardsData';

type Item = {
    quantity: number;
    id: string;
    product: string;
    about: string;
    price: number;
    src: string;
    alt: string;
    item: string;
    units: number;
};

type CartStore = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (product: Item) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: string, quantity: number) => void;
    
};

const loadCartFromStorage = () => {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage', error);
        return [];
    }
};

export const useCartStore = create<CartStore>((set) => ({
    cart: loadCartFromStorage(),
    availableItems: cardsData,
    
    

    addToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // If item already exists in the cart, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      } else {
        // If item doesn't exist, add it with quantity 1
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