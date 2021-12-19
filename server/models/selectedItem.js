const mongoose = require("mongoose");

const SelectedItemSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "item" },
  itemName: {
    type: String,
    default: "untitled",
  },
  shoppingListId: { type: String },
  quantity: {
    type: Number,
    default: 1,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const SelectedItemModel = mongoose.model(
  "selecteditem",
  SelectedItemSchema
);
