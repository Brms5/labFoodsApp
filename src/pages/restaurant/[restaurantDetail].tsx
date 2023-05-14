import React, { useContext, useEffect, useState } from "react";
import {
  GlobalPage,
  HorizontalLine,
  HorizontalLineSolid,
} from "@/styles/GlobalStyle";
import { IRestaurantDetails } from "@/interfaces/restaurants/interface";
import { getRestaurantDetails } from "@/services/restaurants/restaurants";
import { useRouter } from "next/router";
import { CSSReset } from "@/styles/CSSReset";
import {
  RestaurantDetailsDiv,
  RestaurantDetailsHeader,
  RestaurantDetailsInformation,
  RestaurantDetailsMenu,
  RestaurantImgDiv,
  RestaurantInformationTxt,
} from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import RestaurantMenuCard from "./restaurantMenuCard";
import MainMenu from "@/components/mainMenu";
import { GlobalContext } from "@/context/context";

function RestaurantDetail() {
  const { setRestaurantOrder } = useContext(GlobalContext);
  const [restaurantDetail, setRestaurantDetail] =
    useState<IRestaurantDetails>();

  const router = useRouter();
  const restaurantsId = router.query.restaurantDetail;

  useEffect(() => {
    if (restaurantsId != undefined) {
      getRestaurantDetails(restaurantsId)
        .then((response) => {
          setRestaurantDetail(response.data.restaurant);
          setRestaurantOrder({
            id: response.data.restaurant.id,
            name: response.data.restaurant.name,
            address: response.data.restaurant.address,
            deliveryTime: response.data.restaurant.deliveryTime,
            shipping: response.data.restaurant.shipping,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [restaurantsId]);

  const getFilteredProductsByCategory = (category: string | undefined) => {
    return restaurantDetail?.products
      .filter((product) => {
        if (category === undefined) {
          return (
            product.category != "Acompanhamento" && product.category != "Bebida"
          );
        }
        return product.category == category;
      })
      .map((product) => {
        return <RestaurantMenuCard key={product.id} product={product} />;
      });
  };

  const restaurantMainMenu = getFilteredProductsByCategory(undefined);
  const restaurantAccompaniments =
    getFilteredProductsByCategory("Acompanhamento");
  const restaurantDrinks = getFilteredProductsByCategory("Bebida");

  return (
    <GlobalPage>
      <CSSReset />
      <MainMenu />
      <RestaurantDetailsDiv>
        <RestaurantDetailsHeader>
          <div>
            <Link href="/home">
              <ArrowBackIosIcon fontSize="small" />
            </Link>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <h2>Restaurante</h2>
          </div>
        </RestaurantDetailsHeader>
        <HorizontalLine />
        {restaurantDetail ? (
          <RestaurantDetailsInformation>
            <RestaurantImgDiv
              src={restaurantDetail.logoUrl}
              alt={restaurantDetail.name}
            />
            <h1
              style={{
                display: "flex",
                width: "50%",
                color: "#e8222e",
                marginTop: "10px",
              }}
            >
              {restaurantDetail.name}
            </h1>
            <RestaurantInformationTxt style={{ color: "#b8b8b8" }}>
              {restaurantDetail.category}
            </RestaurantInformationTxt>
            <RestaurantInformationTxt
              style={{
                color: "#b8b8b8",
              }}
            >
              <div style={{ marginRight: "50px" }}>
                {restaurantDetail.deliveryTime} min
              </div>
              <div>Frete R${restaurantDetail.shipping},00</div>
            </RestaurantInformationTxt>
            <RestaurantInformationTxt style={{ color: "#b8b8b8" }}>
              {restaurantDetail.address}
            </RestaurantInformationTxt>
            <h2 style={{ margin: "20px 0px 10px 0px", width: "50%" }}>
              Principais
            </h2>
            <HorizontalLineSolid style={{ width: "50%" }} />
            <RestaurantDetailsMenu>{restaurantMainMenu}</RestaurantDetailsMenu>
            {restaurantAccompaniments!.length > 0 ? (
              <>
                <h2 style={{ margin: "20px 0px 10px 0px", width: "50%" }}>
                  Acompanhamentos
                </h2>
                <HorizontalLineSolid style={{ width: "50%" }} />
                <RestaurantDetailsMenu>
                  {restaurantAccompaniments}
                </RestaurantDetailsMenu>
              </>
            ) : (
              <></>
            )}
            <h2 style={{ margin: "20px 0px 10px 0px", width: "50%" }}>
              Bebidas
            </h2>
            <HorizontalLineSolid style={{ width: "50%" }} />
            <RestaurantDetailsMenu style={{ marginBottom: "100px" }}>
              {restaurantDrinks}
            </RestaurantDetailsMenu>
          </RestaurantDetailsInformation>
        ) : (
          "Carregando..."
        )}
      </RestaurantDetailsDiv>
    </GlobalPage>
  );
}

export default RestaurantDetail;
