import mongoose from "mongoose";
import { ListItemModel } from "../models/shoppingItem.js";

export const listItems_get = async (req, res) => {
  try {
    const items = await ListItemModel.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const listItem_add = async (req, res) => {
  const itemBody = req.body;
  //console.log(postBody);
  const newItem = new ListItemModel(itemBody);

  try {
    await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// export const list_delete = async (req, res) => {
//   let id = req.params.id;

//   try {
//     const deletedItem = await itemModel.findByIdAndRemove(id);
//     res.status(200).json(deletedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
