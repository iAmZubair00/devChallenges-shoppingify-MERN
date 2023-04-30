import mongoose from "mongoose";
import { shoppingListModel } from "../models/shoppingList.js";

export const lists_get = async (req, res) => {
  try {
    const lists = await shoppingListModel.find();
    res.status(200).json(lists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const Create = async (req, res) => {
  const listBody = req.body;
  //console.log(postBody);
  const newList = new shoppingListModel(listBody);

  try {
    await newList.save();
    res.status(200).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const toggle_active_list = async (req, res) => {
  const { _id } = req.body;
  try {
    var lists = await shoppingListModel.findOneAndUpdate(
      { _id: _id },
      { isActive: true },
      { new: true }
    );
    var lists = await shoppingListModel.updateMany(
      { _id: { $ne: _id } },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(lists);
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
