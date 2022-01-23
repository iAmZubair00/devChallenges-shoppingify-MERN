import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleItemAdd } from "../../features/rightBarToggleSlice";

const ShoppingList = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#FFF0DE" }}>
      <Button onClick={() => dispatch(toggleItemAdd())}>Add item</Button>
    </div>
  );
};

export default ShoppingList;
