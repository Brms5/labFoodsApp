import {
  GlobalPage,
  HorizontalLine,
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

function Home() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [search, setSearch] = useState("");
  const [restaurantOption, setRestaurantOption] = useState<string | null>(null);
  const [activeOrder, setActiveOrder] = useState();

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
        setActiveOrder(response.data);
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
          // fullWidth
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
    </GlobalPage>
  );
}

export default Home;
