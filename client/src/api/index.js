import axios from "axios";

const baseURL = "http://localhost:5000";

export const addCategory = async (categ) => {
  const data = await axios.post(`${baseURL}/items/category/add`, categ);
  return data;
};

export const getCategories = async () => {
  const data = await axios.get(`${baseURL}/items/categories/get`);
  return data;
};

export const addItem = async (item) => {
  const data = await axios.post(`${baseURL}/items/add`, item);
  return data;
};

export const deleteItem = async (id) => {
  const data = await axios.delete(`${baseURL}/items/delete/${id}`);
  return data;
};

export const getItems = async () => {
  const data = await axios.get(`${baseURL}/items/get`);
  return data;
};

// ---> alternate logic - used previously

// export const getItemsWithCategories = async () => {
//   const data = await axios.get(`${baseURL}/items/category/find`);
//   return data;
// };

// export const addItem_With_Category = async (item) => {
//   const data = await axios.put(`${baseURL}/items/category/edit`, item);
//   return data;
// };

export const ShoppingListCreate = async (list) => {
  const data = await axios.post(`${baseURL}/lists`, list);
  return data;
};

export const getLists = async () => {
  const data = await axios.get(`${baseURL}/lists/get`);
  return data;
};

export const addListItem = async (item) => {
  const data = await axios.post(`${baseURL}/listItems/add`, item);
  return data;
};

// export const deleteItem = async (id) => {
//   const data = await axios.delete(`${baseURL}/items/delete/${id}`);
//   return data;
// };

export const getListItems = async () => {
  const data = await axios.get(`${baseURL}/listItems/get`);
  return data;
};

export const LookupCreate = async (data) => {
  const response = await axios.post(`${baseURL}/lookup`, data);
  return response;
};

export const LookupsGet = async () => {
  const data = await axios.get(`${baseURL}/lookup`);
  return data;
};
