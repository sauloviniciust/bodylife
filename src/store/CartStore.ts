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

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: cardsData,
    addToCart: (item) => set((state) => {
      const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id);

      if (itemIndex !== -1) {
        // Se o item já existe no carrinho, crie uma cópia do carrinho
        const updatedCart = [...state.cart];

        // Atualize a quantidade do item no carrinho
        updatedCart[itemIndex].units += item.units;

        return { cart: updatedCart };
      } else {
        // Caso contrário, adicione o item ao carrinho
        return { cart: [...state.cart, item] };
      }
    }),
    removeFromCart: (id) => set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  };
});
