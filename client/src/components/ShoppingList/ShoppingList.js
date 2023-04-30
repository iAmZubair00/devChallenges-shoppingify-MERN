import { Button } from "@material-ui/core";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllItems } from "../../features/categoryItemSlice";
import { toggleItemAdd } from "../../features/rightBarToggleSlice";

import bottleSvg from "../../assets/images/bottle.svg";
import basketSvg from "../../assets/images/basket.svg";
import { selectAcitveList_Id } from "../../features/shoppingListSlice";
import {
  mergeItemsInLists,
  mergeListItemsWithCategories,
} from "../../utils/common";

const ShoppingList = () => {
  // const items = useSelector(selectAllItems);
  // const categories = useSelector((store) => store.categories);
  // const allCategories = mergeItemsWithCategories(items, categories);
  const categories = useSelector((store) => store.categories);
  const activeListId = useSelector(selectAcitveList_Id);
  const lists = useSelector((store) => store.shoppingLists);
  const listItems = useSelector((store) => store.listItems);
  const allLists = mergeItemsInLists(listItems, lists);
  const activeList = allLists.find((list) => list._id === activeListId);
  const activeListItems = mergeListItemsWithCategories(
    activeList?.items,
    categories
  );
  const dispatch = useDispatch();
  console.log(listItems);
  console.log(activeListItems);

  return (
    <>
      <div
        style={{ backgroundColor: "#FFF0DE", height: "87%", padding: "2rem" }}
      >
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

        {listItems?.length ? (
          <>
            <Typography variant="h5">ShoppingList</Typography>
            <Stack spacing={2}>
              {activeListItems.map((category) => (
                <Category key={category._id} category={category} />
              ))}
            </Stack>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: "2rem 0" }}>No Items</p>
            <img src={basketSvg} alt="memoriesImage" width="90%" />
          </div>
        )}
      </div>
      <TextField
        id="CompanyBranchId"
        //name={UserFieldNames.CompanyBranchId}
        fullWidth
        style={{ padding: 0 }}
        label="Enter a name"
        disabled={!listItems?.length}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                color="primary"
                variant="contained"
                disabled={!listItems?.length}
              >
                Save
              </Button>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="small"
      ></TextField>
    </>
  );
};

export default ShoppingList;

const Category = ({ category }) => {
  const { category_name, items } = category;
  return items?.length ? (
    <Stack>
      <Typography>{category_name}</Typography>
      <Stack>
        {items.map((listItem) => (
          <Item listItem={listItem} key={listItem._id} />
        ))}
      </Stack>
    </Stack>
  ) : null;
};

const Item = ({ listItem }) => {
  const { item, quantity } = listItem;
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Typography variant="h6">{item.item_name}</Typography>
      <Stack direction="row">
        <IconButton
          aria-label="delete"
          size="small"
          style={{
            backgroundColor: "#F9A109",
            color: "white",
            borderRadius: "8px",
          }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <Button
          variant="text"
          startIcon={<RemoveIcon />}
          endIcon={<AddIcon />}
          style={{ backgroundColor: "white" }}
        >
          {quantity} pcs
        </Button>
      </Stack>
    </Stack>
  );
};
