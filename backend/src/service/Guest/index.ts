import {GuestModel} from "../../models";

class GuestService {
	async add(token: string) {
		const doc = new GuestModel({
			token: token
		})
		await doc.save();
		return doc;
	};

	async findToken(token: string) {
		return GuestModel.findOne({
			token: token
		});
	}
}

export default new GuestService();