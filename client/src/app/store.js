import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { categoryReducer, itemReducer } from "../features/categoryItemSlice";
import { ItemDetailReducer } from "../features/ItemDetail";
import { rightBarToggleReducer } from "../features/rightBarToggleSlice";
import { searchTermReducer } from "../features/searchTermSlice";
import { listItemReducer, listReducer } from "../features/shoppingListSlice";

const allReducers = combineReducers({
  //itemsWithCategory: categoryItemReducer,         <--- alternate logic - used previously
  itemDetail: ItemDetailReducer,
  items: itemReducer,
  categories: categoryReducer,
  listItems: listItemReducer,
  lists: listReducer,
  searchTerm: searchTermReducer,
  rightBarToggle: rightBarToggleReducer,
});

const store = createStore(allReducers, compose(applyMiddleware(thunk)));

export default store;
