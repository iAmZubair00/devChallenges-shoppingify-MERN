import mongoose from "mongoose";

const ListItemSchema = new mongoose.Schema({
  item: { type: Object, default: {} },
  shoppingListId: { type: String, default: "" },
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

export const ListItemModel = mongoose.model("listitem", ListItemSchema);
