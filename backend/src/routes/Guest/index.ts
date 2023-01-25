import express from "express";
import {GuestController} from "../../controllers"

const router = express.Router();

router.get("/token/add", GuestController.add);

export default router;