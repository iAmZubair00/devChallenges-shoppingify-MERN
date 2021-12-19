import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  ButtonGroup,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { addItem_With_Category } from "../../features/categoryItemSlice";

const Form = () => {
  const [itemData, setItemData] = useState({
    item_name: "",
    note: "",
    image: "",
    category_name: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem_With_Category(itemData));
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
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
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
        <TextField
          name="category"
          variant="outlined"
          label="category"
          fullWidth
          value={itemData.category_name}
          onChange={(e) =>
            setItemData({ ...itemData, category_name: e.target.value })
          }
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
            onClick={clear}
            fullWidth
          >
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </Paper>
  );
};

export default Form;
