import mongoose from "mongoose";

const LookupSchema = new mongoose.Schema({
  hiddenValue: String,
  visibleValue: String,
  type: String
});

export const itemModel = mongoose.model("Lookup", LookupSchema);