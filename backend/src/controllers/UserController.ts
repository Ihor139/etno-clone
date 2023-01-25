import {Request, Response} from "express";

class UserController {
	async register(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to register user",
			});
		}
	}

	async login(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to login user",
			});
		}
	}

	async logout(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to logout user",
			});
		}
	}

	async update(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to update user",
			});
		}
	}

	async remove(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to remove user",
			});
		}
	}


}

export default new UserController();