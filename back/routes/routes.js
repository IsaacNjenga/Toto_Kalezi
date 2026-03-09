import express from "express";
import { stkPush } from "../controllers/paymentController.js";
import { generateToken } from "../middleware/generateToken.js";

const router = express.Router();

router.post("/donate", generateToken, stkPush);

export { router as Router };
