import jwt from "jsonwebtoken";

class TokenService {
	generateRandom() {
		const randomNumber = Math.floor(Math.random());
		return jwt.sign({randomNumber}, process.env.JWT_SECRET as string)
	}
}

export default new TokenService()