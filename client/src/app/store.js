import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { categoryItemReducer } from "../features/categoryItemSlice";

const allReducers = combineReducers({
  categories: categoryItemReducer,
});

const store = createStore(allReducers, compose(applyMiddleware(thunk)));

export default store;
