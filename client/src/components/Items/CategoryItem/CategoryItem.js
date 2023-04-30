import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Item from "./Item/Item";
import useStyles from "./styles";

const CategoryItem = ({ category }) => {
  const classes = useStyles();
  const { items } = category;
  const category_name = items[0].category.category_name;
  return (
    <Stack className={classes.mainContainer}>
      <Typography variant="h4">{category_name}</Typography>
      <Grid container rowSpacing={2}>
        {items.map((item) => (
          <Grid key={item._id} item xs={12} sm={6} md={3}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CategoryItem;
