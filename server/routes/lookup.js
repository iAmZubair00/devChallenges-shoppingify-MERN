import express from "express";
import { Create, Get } from "../controllers/lookup.js";

const router = express.Router();

router.post("", Create);
router.get("", Get);

export default router;
