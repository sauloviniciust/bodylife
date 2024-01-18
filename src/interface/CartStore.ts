import { Product } from "./Product";

export type CartStore = {
    availableItems: Product[];
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: string, quantity: number) => void;
    
  };