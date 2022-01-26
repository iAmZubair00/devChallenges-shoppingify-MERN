import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import History from "./components/History/History";
import { getCategories, getItems } from "./features/categoryItemSlice";
import { getListItems, getLists } from "./features/shoppingListSlice";

const App = () => {
  const rightBarCurrent = useSelector((store) => store.rightBarToggle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListItems());
    dispatch(getLists());
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch]);
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs
          style={{ backgroundColor: "#FAFAFE", padding: "1.5rem 3rem" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Items />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </Grid>
        {/* {!(
              Object.keys(item).length === 0 && item.constructor === Object
            )} */}
        <Grid item xs={3}>
          {rightBarCurrent === "itemDetail" ? (
            <ItemDetail />
          ) : rightBarCurrent === "itemAdd" ? (
            <Form />
          ) : (
            <ShoppingList />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
