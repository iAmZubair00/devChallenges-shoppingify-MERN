import mongoose from "mongoose";

const LookupSchema = new mongoose.Schema({
  hiddenValue: {
    type: String,
    required: true,
  },
  visibleValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const LookupModel = mongoose.model("Lookup", LookupSchema);
