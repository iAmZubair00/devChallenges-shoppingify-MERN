import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import Item from "./Item/Item";
import useStyles from "./styles";

const CategoryItem = ({ category }) => {
  const classes = useStyles();
  const { category_name, items } = category;
  return (
    <Box
      className={classes.mainContainer}
      sx={{ flexDirection: "column" }}
      spacing={3}
    >
      <Typography variant="h4" align="center">
        {category_name}
      </Typography>
      <Grid item xs={12} sm={6}>
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryItem;
