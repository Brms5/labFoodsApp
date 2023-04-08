import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";


function RestaurantDetail() {
    return (
        <Card 
        // className
        >
          <CardActionArea>
            <CardMedia
              // className
              // image
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">

              </Typography>
              <Typography component="p"></Typography>
              <div>
                <Typography component="p"> min</Typography>
                <Typography component="p">Frete: R$,00</Typography>
              </div>
              <Typography component="p"></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default RestaurantDetail;



// const styles = {
//   card: {
//     minWidth: 320,
//     maxWidth: 450,
//     minHeight: 180,
//     margin: 10,
//   },
//   media: {
//     height: 130,
//   },
// };
