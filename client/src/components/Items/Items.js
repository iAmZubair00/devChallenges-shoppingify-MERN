import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/categoryItemSlice";
import CategoryItem from "./CategoryItem/CategoryItem";

const Items = () => {
  const allCategories = useSelector((store) => store.categories);
  console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Box sx={{ flexDirection: "column" }}>
      {allCategories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </Box>
  );
};

export default Items;
