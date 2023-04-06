import { IRestaurant } from "@/interfaces/restaurants/interface";
import React from "react";
import { RestaurantOptionDiv, RestaurantsOptionsStructureDiv } from "./styled";

interface IRestaurantsOptions {
  restaurants: IRestaurant[];
}

function RestaurantsOptions({ restaurants }: IRestaurantsOptions) {
  return (
    <RestaurantsOptionsStructureDiv>
      {restaurants!.length > 0 ? (
        restaurants!.map((restaurant) => {
          return (
            <RestaurantOptionDiv key={restaurant.id}>
              <button onClick={() => console.log(restaurant.category)} style={{ border: "none", backgroundColor: "white", cursor: "pointer" }}>
                {restaurant.category}
              </button>
            </RestaurantOptionDiv>
          );
        })
      ) : (
        <p>Carregando...</p>
      )}
    </RestaurantsOptionsStructureDiv>
  );
}

export default RestaurantsOptions;
