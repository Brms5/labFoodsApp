import { GlobalPage, RestaurantsDiv } from "@/styles/GlobalStyle";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { CSSReset } from "@/styles/CSSReset";
import { getRestaurants } from "@/services/restaurants/restaurants";
import { IRestaurant } from "@/interfaces/restaurants/interface";
import RestaurantsOptions from "./restaurantsOptions";

function Home() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        setRestaurants(response.data.restaurants);
        console.log(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <GlobalPage>
      <CSSReset />
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
        />
        <RestaurantsOptions restaurants={restaurants}/>
      </RestaurantsDiv>
    </GlobalPage>
  );
}

export default Home;
