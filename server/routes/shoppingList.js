import express from "express";
import {
  lists_get,
  Create,
  toggle_active_list,
} from "../controllers/shoppingList.js";

const router = express.Router();

router.post("", Create);
router.get("/get", lists_get);
router.put("/toggleActive", toggle_active_list);
// router.post("/add", item_add);
// router.get("/get", items_get);
// router.delete("/delete/:id", item_delete);

export default router;
