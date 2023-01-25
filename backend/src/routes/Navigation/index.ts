import express from "express";
import {NavigationController} from "../../controllers";

const router = express.Router();

router.get("/navigation", NavigationController.getAll);

export default router;