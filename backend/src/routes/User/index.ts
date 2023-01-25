import express from "express";
import {UserController} from "../../controllers"

const router = express.Router();

router.post("/user/registration", UserController.register);
router.post('/user/login', UserController.login);
router.post("/user/logout", UserController.logout);
router.post("/user/update", UserController.update);
router.post("/user/remove", UserController.remove);

export default router;