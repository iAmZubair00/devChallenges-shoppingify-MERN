import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  image: String,
  category_name: {
    type: String,
    required: true,
  },
  note: String,
});

const ItemsCategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
  items: [ItemsSchema],
});

export const itemModel = mongoose.model("item", ItemsSchema);
export const ItemsCategoryModel = mongoose.model(
  "ItemsCategory",
  ItemsCategorySchema
);
