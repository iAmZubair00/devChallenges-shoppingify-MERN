import mongoose from "mongoose";
import { itemModel, ItemsCategoryModel } from "../models/items.js";

export const category_find = async (req, res) => {
  try {
    const categories = await ItemsCategoryModel.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const category_add = async (req, res) => {
  const postBody = req.body;
  //console.log(postBody);
  const newCategory = new ItemsCategoryModel(postBody);

  try {
    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addItem_With_Category = async (req, res) => {
  const { category_name } = req.body;
  console.log(req.body);
  const data = await ItemsCategoryModel.findOneAndUpdate(
    { category_name: category_name },
    { $addToSet: { items: req.body } },
    { new: true, upsert: true }
  );

  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const item_find = async (req, res) => {
  let id = req.params.id;
  try {
    const item = await itemModel.findById(id);
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const item_add = async (req, res) => {
  const postBody = req.body;
  //console.log(postBody);
  const newItem = new itemModel(postBody);

  try {
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
