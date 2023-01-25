import {NavigationModel} from "../../models";

class NavigationService {
	async getAll() {
		return NavigationModel.find();
	};
}

export default new NavigationService();