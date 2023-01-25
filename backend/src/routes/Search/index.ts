import express from "express";
import {SearchController} from "../../controllers";

const router = express.Router();

router.get("/search/:key", SearchController.getResult);

export default router;