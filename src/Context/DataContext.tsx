import React, { createContext, useContext, useState } from "react";
import { Product } from "../interface/Product";

interface IProductContext {
    product: Product;
    setProduct: (value: Product) => void;
}

export const DataContext = createContext<IProductContext>({
    product: {} as Product,
    setProduct: () => {},
});

interface IDataProviderProps {
    children: React.ReactNode;
}

const DataProvider = ({ children }: IDataProviderProps) => {
    const [product, setProduct] = useState<Product>({} as Product);

    return (
        <DataContext.Provider
            value={{
                product,
                setProduct,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};


const useData = () => useContext(DataContext);

// eslint-disable-next-line react-refresh/only-export-components
export { DataProvider, useData }
