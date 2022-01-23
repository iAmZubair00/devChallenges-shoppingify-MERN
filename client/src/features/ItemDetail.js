export const updateItemDetail = (data) => {
  return { type: "ItemDetail/update", payload: data };
};

const initialState = {};
export const ItemDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ItemDetail/update":
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
