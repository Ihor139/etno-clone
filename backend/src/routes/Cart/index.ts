import express from "express";
import {CartController} from "../../controllers"

const router = express.Router();

router.get("/cart", CartController.get);
router.post("/cart", CartController.add);
router.post("/cart/remove", CartController.remove);
router.post("/cart/update", CartController.update);

export default router;