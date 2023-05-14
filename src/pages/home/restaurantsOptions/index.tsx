import { IRestaurant } from "@/interfaces/restaurants/interface";
import React from "react";
import { RestaurantsOptionsStructureDiv } from "./styled";

interface IRestaurantsOptions {
  restaurants: IRestaurant[];
  setRestaurantOption: Function;
  restaurantOption: string | null;
}

function RestaurantsOptions({
  restaurants,
  setRestaurantOption,
  restaurantOption,
}: IRestaurantsOptions) {

  const restaurantsCategory = restaurants
    .map((restaurant) => {
      return restaurant.category;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
    <RestaurantsOptionsStructureDiv>
      {restaurants!.length > 0 ? (
        restaurantsCategory!.map((category, index) => {
          return (
            <div key={index}>
              <button
                onClick={() =>
                  setRestaurantOption(
                    restaurantOption != category ? category : null
                  )
                }
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                  color: restaurantOption == category ? "#e8222e" : "black",
                }}
              >
                {category}
              </button>
            </div>
          );
        })
      ) : (
        <p>Carregando...</p>
      )}
    </RestaurantsOptionsStructureDiv>
  );
}

export default RestaurantsOptions;
