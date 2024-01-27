import React, { createContext, useContext, useState } from "react";
import { Buyer } from "../interface/Buyer";

interface IBuyerContext {
    buyer: Buyer;
    setBuyer: (value: Buyer) => void;
}

export const DataContext = createContext<IBuyerContext>({
    buyer: {} as Buyer,
    setBuyer: () => {},
});

interface IDataProviderProps {
    children: React.ReactNode;
}

const BuyerProvider = ({ children }: IDataProviderProps) => {
    const [buyer, setBuyer] = useState<Buyer>({} as Buyer);

    return (
        <DataContext.Provider
            value={{
                buyer,
                setBuyer,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};


const useBuyer = () => useContext(DataContext);

// eslint-disable-next-line react-refresh/only-export-components
export { BuyerProvider, useBuyer }
