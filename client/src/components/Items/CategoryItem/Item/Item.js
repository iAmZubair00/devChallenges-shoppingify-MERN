import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useDispatch } from "react-redux";
import { updateItemDetail } from "../../../../features/ItemDetail";
import { toggleItemDetail } from "../../../../features/rightBarToggleSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => {
          dispatch(updateItemDetail(item));
          dispatch(toggleItemDetail());
        }}
        style={{ backgroundColor: "white" }}
      >
        {item.item_name}
      </Button>
    </div>
  );
};

export default Item;
