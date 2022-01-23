import express from "express";

const router = express.Router();
import {
  categories_get,
  category_add,
  items_get,
  item_add,
  item_delete,
} from "../controllers/items.js";

router.post("/category/add", category_add);
router.get("/categories/get", categories_get);
router.post("/add", item_add);
router.get("/get", items_get);
router.delete("/delete/:id", item_delete);

export default router;

// ---> alternate logic - used previously

// router.get("/category/find", category_find);
// router.put("/category/edit", addItem_With_Category);
// router.get("/find/:id", item_find);
