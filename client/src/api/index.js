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
