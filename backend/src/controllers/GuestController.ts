import {Request, Response} from "express";
import {GuestService, TokenService} from "../service";
import {Guest} from "../types";

class GuestController {
	async add(req: Request, res: Response) {
		try {
			const cookieToken: string = req.cookies.userToken;
			const dbToken: Guest | null = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				res.status(200);
				res.send({
					message: dbToken
				});
				return
			}

			const token: string = TokenService.generateRandom();
			const guest: Guest = await GuestService.add(token);

			res.cookie("userToken", token);
			res.json(guest);
		} catch (error) {
			res.status(500).json({
				message: "Failed to register guest",
			});
		}
	}
}

export default new GuestController();