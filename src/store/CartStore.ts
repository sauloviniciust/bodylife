import { create } from 'zustand';
import { cardsData } from '../components/cardsData/CardsData';

type Item = {
    item: string;
    id: string; 
    src: string;
    alt: string;
    product: string;
    about: string;
    price: number;
    units: number;
}

type CartStore  = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart:(id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],

        availableItems: cardsData,

        addToCart: (item) => set((state) => (
            {cart: [...state.cart, item] })),

        removeFromCart: (id) => set((state) => ({
            cart: state.cart.filter((item) => item.id !== id)})), 
    }
})