import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  note: String,
});

export const itemModel = mongoose.model("Item", ItemSchema);

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
