import express from "express";
import {PostController} from "../../controllers";

const router = express.Router();

/**
 * список роутов
 */

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);

export default router;