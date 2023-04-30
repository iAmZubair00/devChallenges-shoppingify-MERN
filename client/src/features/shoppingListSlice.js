import * as api from "../api/index";
import { ShoppingListStatus } from "../utils/constants";

// Action Creators

export const addList = (list) => async (dispatch) => {
  try {
    const { data } = await api.addList(list);
    dispatch({
      type: "list/add",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getLists = () => async (dispatch) => {
  try {
    const { data } = await api.getLists();
    dispatch({
      type: "list/get",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addListItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.addListItem(item);
    dispatch({
      type: "listItem/add",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// export const deleteItem = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.deleteItem(id);
//     dispatch({
//       type: "item/delete",
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const getListItems = () => async (dispatch) => {
  try {
    const { data } = await api.getListItems();
    dispatch({
      type: "listItem/get",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Reducers

const initialState = [];

export const listItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "listItem/add":
      return [...state, action.payload];
    case "listItem/get":
      return action.payload;
    case "listItem/delete":
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "list/add":
      return [...state, action.payload];
    case "list/get":
      return action.payload;
    default:
      return state;
  }
};

// selectors for list

export const selectAcitveList_Id = (state) =>
  state.lists.find((list) => list.status===ShoppingListStatus.ACTIVE)?._id;

// export const selectFilteredAllItems = (state) => {
//   const allItems = selectAllItems(state);
//   const searchTerm = selectSearchTerm(state);

//   return allItems.filter((item) =>
//     item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };
