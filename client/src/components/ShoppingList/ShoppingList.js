import { Button } from "@material-ui/core";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllItems } from "../../features/categoryItemSlice";
import { toggleItemAdd } from "../../features/rightBarToggleSlice";
import { mergeItemsWithCategories } from "../../utils";
import bottleSvg from "../../assets/images/bottle.svg";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const categories = useSelector((store) => store.categories);
  const allCategories = mergeItemsWithCategories(items, categories);
  return (
    <div style={{ backgroundColor: "#FFF0DE", padding: "2rem" }}>
      <Card
        sx={{
          display: "flex",
          gap: "1rem",
          backgroundColor: "#80485B",
          borderRadius: "1.2rem",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={bottleSvg}
          alt="bottle Item"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ color: "white" }}>
              Didn't find what you need?
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Button
              onClick={() => dispatch(toggleItemAdd())}
              variant="contained"
            >
              Add item
            </Button>
          </Box>
        </Box>
      </Card>

      <Typography variant="h5">ShoppingList</Typography>
      <Stack spacing={2}>
        {allCategories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </Stack>
    </div>
  );
};

export default ShoppingList;

const Category = ({ category }) => {
  const { category_name, items } = category;
  return (
    <Stack>
      <Typography>{category_name}</Typography>
      <Stack container rowSpacing={2}>
        {items.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </Stack>
    </Stack>
  );
};

const Item = ({ item }) => {
  const { item_name } = item;
  return <Typography variant="h6">{item_name}</Typography>;
};
