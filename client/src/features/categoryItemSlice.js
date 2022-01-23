import * as api from "../api/index";
import { selectSearchTerm } from "./searchTermSlice";

// Action Creators

export const addCategory = (categ) => async (dispatch) => {
  try {
    const { data } = await api.addCategory(categ);
    dispatch({
      type: "category/add",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.getCategories();
    dispatch({
      type: "category/get",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.addItem(item);
    dispatch({
      type: "item/add",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteItem(id);
    dispatch({
      type: "item/delete",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.getItems();
    dispatch({
      type: "item/get",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Reducers

const initialState = [];

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "item/add":
      return [...state, action.payload];
    case "item/get":
      return action.payload;
    case "item/delete":
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "category/add":
      return [...state, action.payload];
    case "category/get":
      return action.payload;
    default:
      return state;
  }
};

// selectors for Items

export const selectAllItems = (state) => state.items;

export const selectFilteredAllItems = (state) => {
  const allItems = selectAllItems(state);
  const searchTerm = selectSearchTerm(state);

  return allItems.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// ----> alternate logic - used previously

// export const addItem_With_Category = (item) => async (dispatch) => {
//   try {
//     const { data } = await api.addItem_With_Category(item);
//     dispatch({
//       type: "categoryItem/add_item",
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const getItemsWithCategories = () => async (dispatch) => {
//   try {
//     const { data } = await api.getItemsWithCategories();
//     dispatch({
//       type: "categoryItem/getAll",
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const categoryItemReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "categoryItem/add_item":
//       return state.find(
//         (item) => item.category_name === action.payload.category_name
//       )
//         ? state.map((item) =>
//             item.category_name === action.payload.category_name
//               ? action.payload
//               : item
//           )
//         : [...state, action.payload];
//     case "categoryItem/getAll":
//       return action.payload;
//     default:
//       return state;
//   }
// };
