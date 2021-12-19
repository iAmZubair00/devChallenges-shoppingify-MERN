import axios from "axios";

const baseURL = "http://localhost:5000";

export const getCategories = async () => {
  const data = await axios.get(`${baseURL}/items/category/find`);
  return data;
};

export const addItem_With_Category = async (item) => {
  const data = await axios.put(`${baseURL}/items/category/edit`, item);
  return data;
};

export const addCategory = async (categ) => {
  const data = await axios.post(`${baseURL}/items/category_add`, categ);
  return data;
};

// export const editPost = async (updatedPost) => {
//   const data = await axios.put(`${baseURL}/posts`, updatedPost);
//   return data;
// };

// export const deletePost = async (id) => {
//   const data = await axios.delete(`${baseURL}/posts/${id}`);
//   return data;
// };
