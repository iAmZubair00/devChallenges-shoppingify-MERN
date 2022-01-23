import express from "express";
import { listItems_get, listItem_add } from "../controllers/listItems.js";

const router = express.Router();

router.post("/add", listItem_add);
router.get("/get", listItems_get);

export default router;
