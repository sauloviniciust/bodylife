import { create } from 'zustand';
import { cardsData } from '../components/cardsData/CardsData';

type Item = {
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
    removeFromCart: (id: string) => void;
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

    addToCart: (item) =>
        set((state) => {
            const updatedCart = [...state.cart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),

    removeFromCart: (id: string) =>
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),
}));
