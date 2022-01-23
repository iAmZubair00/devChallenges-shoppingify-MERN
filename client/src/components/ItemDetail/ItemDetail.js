import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleShoppingList } from "../../features/rightBarToggleSlice";
import { deleteItem } from "../../features/categoryItemSlice";
import { addList, addListItem } from "../../features/shoppingListSlice";
const ItemDetail = () => {
  //console.log(post);
  const item = useSelector((store) => store.itemDetail);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ padding: "2rem 2rem", height: "90vh", boxShadow: "none" }}
    >
      <CardMedia
        className={classes.media}
        image={item.image}
        style={{ borderRadius: "15px" }}
      />
      <CardContent style={{ padding: 0 }}>
        <div className={classes.details}>
          <Typography color="textSecondary" component="h6">
            name
          </Typography>
          <Typography className={classes.title} gutterBottom component="h4">
            {item.item_name}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography color="textSecondary" component="h6">
            category
          </Typography>
          <Typography className={classes.title} gutterBottom component="h4">
            {item.category_name}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography color="textSecondary" component="h6">
            note
          </Typography>
          <Typography className={classes.title} gutterBottom component="h4">
            {item.note}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          onClick={() => {
            dispatch(deleteItem(item._id));
            dispatch(toggleShoppingList());
          }}
        >
          delete
        </Button>
        <Button
          size="small"
          onClick={() => {
            //dispatch(addList({ title: "temp" }));
            dispatch(addListItem({ item: item }));
            dispatch(toggleShoppingList());
          }}
          style={{
            backgroundColor: "#F9A109",
            padding: "0.8rem",
            borderRadius: "10px",
          }}
        >
          Add to list
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
