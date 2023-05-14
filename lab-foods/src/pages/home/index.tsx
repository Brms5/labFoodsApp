import {
  GlobalPage,
  RestaurantsDiv,
} from "@/styles/GlobalStyle";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useMemo, useState } from "react";
import { CSSReset } from "@/styles/CSSReset";
import { getRestaurants } from "@/services/restaurants/restaurants";
import { IRestaurant } from "@/interfaces/restaurants/interface";
import RestaurantsOptions from "./restaurantsOptions";
import RestaurantCard from "./restaurantCard";
import { RestaurantsCardsDiv } from "./styled";
import { useRouter } from "next/router";
import MainMenu from "@/components/mainMenu";
import { getActiveOrder } from "@/services/order/order";
import ActiveOrder from "./activeOrder";
import { IOrderHistory } from "@/interfaces/cart/interface";

function Home() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [search, setSearch] = useState("");
  const [restaurantOption, setRestaurantOption] = useState<string | null>(null);
  const [activeOrder, setActiveOrder] = useState<IOrderHistory>();

  const router = useRouter();

  const filteredRestaurants = useMemo(() => {
    let newRestaurantsList = restaurants.filter((restaurant) => {
      const restaurantName = restaurant.name.toLowerCase();
      const searchText = search.toLocaleLowerCase();
      return restaurantName.startsWith(searchText);
    });
    if (restaurantOption != null) {
      newRestaurantsList = newRestaurantsList.filter((restaurant) => {
        return restaurant.category == restaurantOption;
      });
    }
    return newRestaurantsList;
  }, [search, restaurants, restaurantOption]);

  const restaurantsComponents = filteredRestaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
        onClickRestaurant={() => onClickRestaurant(restaurant.id)}
      />
    );
  });

  const onClickRestaurant = (id: string) => {
    router.push({
      pathname: "/restaurant/[id]",
      query: { id },
    });
  };

  console.log("activeOrder", activeOrder);

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
    getActiveOrder()
      .then((response) => {
        console.log("response", response);
        setActiveOrder(response.order);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar o pedido ativo");
      });
  }, []);

  return (
    <GlobalPage>
      <CSSReset />
      <MainMenu />
      <RestaurantsDiv>
        <TextField
          id="restaurant"
          placeholder="Restaurante"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
          }}
        />
        <RestaurantsOptions
          restaurants={restaurants}
          setRestaurantOption={setRestaurantOption}
          restaurantOption={restaurantOption}
        />
        <RestaurantsCardsDiv>{restaurantsComponents}</RestaurantsCardsDiv>
      </RestaurantsDiv>
      {activeOrder?.restaurantName ? <ActiveOrder activeOrder={activeOrder} /> : <> </>}
    </GlobalPage>
  );
}

export default Home;
