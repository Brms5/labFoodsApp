import {
  GlobalContextData,
  GlobalProviderProps,
} from "@/interfaces/contexts/interface";
import { IProductCart } from "@/interfaces/restaurantProduct/interface";
import { IRestaurantOrder } from "@/interfaces/restaurants/interface";
import { createContext, useMemo, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextData);

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [cart, setCart] = useState<IProductCart[]>([]);
  const [restaurantOrder, setRestaurantOrder] = useState<IRestaurantOrder>({
    id: 0,
    name: "",
    address: "",
    deliveryTime: 0,
    shipping: 0,
  });

  const contextValue = useMemo(
    () => ({ cart, setCart, restaurantOrder, setRestaurantOrder }),
    [cart, setCart, restaurantOrder, setRestaurantOrder]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
