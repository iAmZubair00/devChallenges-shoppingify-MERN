import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Shopping List",
  },
  isCompleted: {
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
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

export const shoppingListModel = mongoose.model(
  "shoppinglist",
  shoppingListSchema
);
