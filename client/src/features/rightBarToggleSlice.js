export const toggleItemAdd = () => {
  return { type: "rightBarToggle/itemAdd" };
};

export const toggleItemDetail = (data) => {
  return { type: "rightBarToggle/itemDetail", payload: data };
};

export const toggleShoppingList = () => {
  return { type: "rightBarToggle/shoppingList" };
};

const initialState = "shoppingList";
export const rightBarToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rightBarToggle/itemAdd":
      return "itemAdd";
    case "rightBarToggle/itemDetail":
      return "itemDetail";
    case "rightBarToggle/shoppingList":
      return "shoppingList";
    default:
      return state;
  }
};
