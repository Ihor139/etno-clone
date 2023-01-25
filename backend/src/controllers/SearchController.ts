import {Request, Response} from "express";
import SearchService from "../service/Search"
import {ProductGroup} from "../types";

class SearchController {
	getResult = async (
		req: Request,
		res: Response,
	) => {
		try {
			const productsGroup: ProductGroup[] = await SearchService.getResult(req.params.key);
			const result = productsGroup.map(list => {
				return list.items[0]
			})

			res.json(result);

		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: "Not found",
			});
		}
	};
}

export default new SearchController();