import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { AddButton, RemoveButton } from "./style";
import { IProduct } from "@/interfaces/restaurantProduct/interface";
import { GlobalContext } from "@/context/context";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "space-around",
  alignItems: "center",
};

interface IProductAddModal {
  orderNumber: number;
  setOrderNumber: Function;
  product: IProduct;
}

export default function ProductAddModal({
  orderNumber,
  setOrderNumber,
  product,
}: IProductAddModal) {
  const { cart, setCart } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemoveProduct = () => {
    const productToRemove = cart.find(
      (item: any) => item.product.id === product.id
    );
    if (!productToRemove) return;
    const index = cart.indexOf(productToRemove);
    cart.splice(index, 1);
    setCart([...cart]);
    setOrderNumber(0);
    setQuantity(0);
  };

  return (
    <div>
      {orderNumber == 0 ? (
        <AddButton>
          <button onClick={() => handleOpen()} style={{ cursor: "pointer" }}>
            Adicionar
          </button>
        </AddButton>
      ) : (
        <RemoveButton>
          <button
            onClick={() => handleRemoveProduct()}
            style={{ cursor: "pointer" }}
          >
            remover
          </button>
        </RemoveButton>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ alignContent: "center" }}
          >
            Selecione a quantidade desejada
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quantity}
              label="quantity"
              onChange={handleChange}
            >
              {[...Array(10).keys()].map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            onClick={() => {
              handleClose();
              setOrderNumber(quantity);
              setCart([
                ...cart,
                {
                  product: product,
                  quantity: quantity,
                },
              ]);
            }}
          >
            ADICIONAR AO CARRINHO
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
