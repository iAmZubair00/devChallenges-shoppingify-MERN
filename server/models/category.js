import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    category_name: {
      type: String,
      unique: true,
      required: true,
    },
  });
export const CategoryModel = mongoose.model("Category", CategorySchema);