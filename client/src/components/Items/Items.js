import { Box, TextField, Typography, InputAdornment } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredAllItems } from "../../features/categoryItemSlice";
import {
  selectSearchTerm,
  setSearchTerm,
} from "../../features/searchTermSlice";
import { restructureItemsForCategories } from "../../utils/common";
import CategoryItem from "./CategoryItem/CategoryItem";
import { Stack } from "@mui/material";

const Items = () => {
  //const allCategories = useSelector((store) => store.itemsWithCategory);   <--- alternate logic - used previously
  //const items = useSelector((store) => store.items);
  const items = useSelector(selectFilteredAllItems);
 const restructuredItems = restructureItemsForCategories(items);
  console.log(restructuredItems);
  //const styles = useStyles();
  // useEffect(() => {
  //   dispatch(getItemsWithCategories());    <--- alternate logic - used previously
  // }, [dispatch]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography>
          Shoppingify allows you take your shopping list wherever you go
        </Typography>
        <SearchBox />
      </Box>
      <Stack spacing={2}>
        {restructuredItems.map((item) => (
          <CategoryItem key={item.category?._id} category={item} />
        ))}
      </Stack>
    </>
  );
};

export default Items;

const SearchBox = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  return (
    <TextField
      name="search"
      variant="outlined"
      label="search item"
      fullWidth
      value={searchTerm}
      onChange={onSearchTermChangeHandler}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      style={{ backgroundColor: "white" }}
    />
  );
};
