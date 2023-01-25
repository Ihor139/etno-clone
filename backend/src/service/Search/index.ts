import {ProductModel} from "../../models";


class SearchService {
	async getResult(key: string) {
		return ProductModel.aggregate([
			{
				$match: {
					$or: [
						{title: {$regex: key, $options: "i"}},
						{category: {$elemMatch: {$regex: key, $options: "i"}}},
						{colors: {$elemMatch: {$regex: key, $options: "i"}}}
					]
				}
			},
			{
				$group: {
					_id: "$prodId",
					items: {
						$push: "$$ROOT"
					}
				}
			}
		]);
	};
}

export default new SearchService();