import express from "express";
import {ProductController} from "../../controllers";

const router = express.Router();

//admin routes

// router.post("/products/create", multerInstance.upload.single('image'), ProductController.create);
// router.get("/products/update/:id", ProductController.update);
// router.get("/products/remove/:id", ProductController.remove);

router.get("/products", ProductController.getAll);
router.get("/products/new", ProductController.getNew);
router.get("/products/:id", ProductController.getOne);

export default router;