import * as api from "../api/index";

export const addItem_With_Category = (item) => async (dispatch) => {
  try {
    const { data } = await api.addItem_With_Category(item);
    dispatch({
      type: "categoryItem/add_item",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addCategory = (categ) => async (dispatch) => {
  try {
    const { data } = await api.addCategory(categ);
    dispatch({
      type: "categoryItem/add_category",
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
      type: "categoryItem/getAll",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const initialState = [];
export const categoryItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categoryItem/add_item":
      return state.find(
        (item) => item.category_name === action.payload.category_name
      )
        ? state.map((item) =>
            item.category_name === action.payload.category_name
              ? [...item.items, action.payload]
              : item
          )
        : [...state, action.payload];
    case "categoryItem/add_category":
      return action.payload;
    case "categoryItem/getAll":
      return action.payload;
    default:
      return state;
  }
};

// export const selectAllRecipes = (state) => state.allRecipes;

// export const selectFilteredAllRecipes = (state) => {
//   const allRecipes = selectAllRecipes(state);
//   const searchTerm = selectSearchTerm(state);

//   return allRecipes.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };
