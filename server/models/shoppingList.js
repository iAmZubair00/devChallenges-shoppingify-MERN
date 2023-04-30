import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Shopping List",
  },
  statusLkpId: String,
  shoppingItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingItem'
  }],
  /* isCompleted: {
    type: Boolean,
    default: false,
  },
  isCanceled: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  }, */
  createdDate: {
    type: Date,
    default: new Date(),
  }
});

export const shoppingListModel = mongoose.model(
  "ShoppingList",
  shoppingListSchema
);
