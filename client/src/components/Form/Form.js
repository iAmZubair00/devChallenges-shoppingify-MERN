import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  ButtonGroup,
} from "@material-ui/core";
import TextField2 from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addItem } from "../../features/categoryItemSlice";
import { toggleShoppingList } from "../../features/rightBarToggleSlice";
import {
  createShoppingList,
  selectAcitveList_Id,
} from "../../features/shoppingListSlice";
import {
  selectLookupsByType,
  selectLookupsByTypeAndHiddenValue,
} from "../../features/lookupSlice";
import { LookupTypes, ShoppingListStatus } from "../../utils/constants";

const Form = () => {
  const [itemData, setItemData] = useState({
    item_name: "",
    note: "",
    image: "",
    category_name: "",
  });
  const categories = useSelector((store) => store.categories);
  const statusLookups = useSelector((store) =>
    selectLookupsByTypeAndHiddenValue(
      store,
      LookupTypes.ShoppingListStatus,
      ShoppingListStatus.ACTIVE
    )
  );
  const activeListId = useSelector(selectAcitveList_Id);
  const category_names = categories.map((category) => category.category_name);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addItem(itemData));
    if (!!activeListId) {
      // TODO: use this shoppingListId to create new ShoppingItem
    } else {
      let shoppingListBody = {
        statusLkpId: statusLookups[0]._id,
      };
      dispatch(createShoppingList(shoppingListBody));
      // TODO: use this shoppingList->Id to create new ShoppingItem
    }
    /* !category_names.includes(itemData.category_name) &&
      dispatch(addCategory({ category_name: itemData.category_name })); */
    dispatch(toggleShoppingList());
    clear();
  };
  const clear = () => {
    setItemData({
      item_name: "",
      note: "",
      image: "",
      category_name: "",
    });
  };
  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
      style={{ backgroundColor: "#FAFAFE" }}
    >
      <Typography variant="h6">Add a new Item</Typography>
      <TextField
        name="name"
        variant="outlined"
        label="name"
        fullWidth
        value={itemData.item_name}
        onChange={(e) =>
          setItemData({ ...itemData, item_name: e.target.value })
        }
      />
      <TextField
        name="note"
        variant="outlined"
        label="note"
        fullWidth
        value={itemData.note}
        onChange={(e) => setItemData({ ...itemData, note: e.target.value })}
      />
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        fullWidth
        value={itemData.category_name}
        onChange={(e, value) =>
          setItemData({ ...itemData, category_name: value })
        }
        onInputChange={(e, inputValue) =>
          setItemData({ ...itemData, category_name: inputValue })
        }
        options={category_names}
        renderInput={(params) => <TextField2 {...params} label="category" />}
      />
      <div className={classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItemData({ ...itemData, image: base64 })}
        />
      </div>
      <ButtonGroup>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => {
            clear();
            dispatch(toggleShoppingList());
          }}
          fullWidth
        >
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default Form;
