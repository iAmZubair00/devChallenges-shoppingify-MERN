import mongoose from "mongoose";

const ShoppingItemSchema = new mongoose.Schema({
  /* item: { type: Object, default: {} },
  shoppingListId: { type: String, default: "" }, */
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  shoppingList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingList'
  },
  quantity: {
    type: Number,
    default: 1,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  // itemName: {
  //   type: String,
  //   default: "untitled",
  // },
});

export const ListItemModel = mongoose.model("ShoppingItem", ShoppingItemSchema);
