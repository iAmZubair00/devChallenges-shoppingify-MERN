import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  category_name: {
    type: String,
    required: true,
  },
  note: String,
});

const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    unique: true,
    required: true,
  },
});

export const itemModel = mongoose.model("item", ItemSchema);
export const CategoryModel = mongoose.model("category", CategorySchema);

// alternate logic - used previously

// const ItemsCategorySchema = new mongoose.Schema({
//   category_name: {
//     type: String,
//     required: true,
//   },
//   items: [ItemSchema],
// });
// export const ItemsCategoryModel = mongoose.model(
//   "ItemsCategory",
//   ItemsCategorySchema
// );
