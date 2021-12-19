import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <Button variant="contained">{item.item_name}</Button>
    </div>
  );
};

export default Item;
