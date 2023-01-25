import {Request, Response} from "express";
import ProductService from '../service/Product'
import {Product} from "../types";

class ProductController {
	async getAll(req: Request, res: Response) {
		try {
			const products: Product[] = await ProductService.getAll()
			res.json(products);
		} catch (error) {
			res.status(500).json({
				message: "Failed to receive products",
			});
		}
	};

	async getNew(req: Request, res: Response) {
		try {
			const products: Product[] = await ProductService.getNew();
			res.json(products);
		} catch (error) {
			res.status(500).json({
				message: "Failed to receive products",
			});
		}
	};

	async getOne(req: Request, res: Response) {
		try {
			const product = await ProductService.getOne(req.params.id)
			res.json(product);
		} catch (error) {
			res.status(500).json({
				message: "Failed to receive product",
			});
		}
	};
}

export default new ProductController();