import express from "express";
import { lists_get, list_add } from "../controllers/shoppingList.js";

const router = express.Router();

router.post("/add", list_add);
router.get("/get", lists_get);
// router.post("/add", item_add);
// router.get("/get", items_get);
// router.delete("/delete/:id", item_delete);

export default router;
