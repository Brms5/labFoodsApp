import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IRestaurant } from "@/interfaces/restaurants/interface";

interface IRestaurantCard {
  restaurant: IRestaurant;
  onClickRestaurant: Function;
}

function RestaurantCard({ restaurant, onClickRestaurant }: IRestaurantCard) {
  return (
    <Card onClick={() => onClickRestaurant()} sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={restaurant.logoUrl}
          alt={restaurant.name}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ color: "#e8222e", width: "80%" }}
          >
            {restaurant.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {restaurant.deliveryTime} min
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frete R${restaurant.shipping},00
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RestaurantCard;
