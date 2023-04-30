import mongoose from "mongoose";
import { LookupModel } from "../models/lookup.js";

export const Create = async (req, res) => {
  const postBody = req.body;
  const newRecord = new LookupModel(postBody);

  try {
    await newRecord.save();
    res.status(200).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const Get = async (req, res) => {
  try {
    const records = await LookupModel.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
