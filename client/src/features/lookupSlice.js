import * as api from "../api/index";

// Action Creators

export const createLookup = (categ) => async (dispatch) => {
  try {
    const { data } = await api.LookupCreate(categ);
    dispatch({
      type: "lookup/add",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getLookups = () => async (dispatch) => {
  try {
    const { data } = await api.LookupsGet();
    dispatch({
      type: "lookup/get",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Reducers

const initialState = [];

export const lookupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "lookup/add":
      return [...state, action.payload];
    case "lookup/get":
      return action.payload;
    default:
      return state;
  }
};

// selectors for Lookups

export const selectAllLookups = (state) => state.lookups;

export const selectLookupsByType = (state, type) => {
  const allRecords = selectAllLookups(state);
  return allRecords.filter((item) => item.type === type);
};
export const selectLookupsByTypeAndHiddenValue = (state, type, hv) => {
  const typeLookups = selectLookupsByType(state, type);
  return typeLookups.filter((item) => item.hiddenValue === hv);
};
