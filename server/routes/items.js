import express from "express";

const router = express.Router();
import {
  addItem_With_Category,
  category_add,
  category_find,
  item_add,
  item_find,
} from "../controllers/items.js";

router.post("/category/add", category_add);
router.get("/category/find", category_find);
router.put("/category/edit", addItem_With_Category);
router.post("/add", item_add);
router.get("/find/:id", item_find);

export default router;
