import {Request, Response} from "express";

import {CartService, GuestService} from "../service";
import {GuestModel, ProductModel} from "../models";
import {Guest, Product, Size} from "../types";

// TO DO -- Move logic to service

class CartController {
	async get(req: Request, res: Response) {
		try {
			const cookieToken: string = req.cookies.userToken;
			const dbToken: Guest | null = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err, products) {
						if (err) {
							console.log('error:' + err);
						} else {
							products?.products.map(item => {
								item.sum = item.amount * item.product.price.base
							})

							const prices = products?.products.map(item => item.product.price.base * item.amount)
							const total = prices?.reduce((partialSum, item)=> partialSum + item, 0);

							res.json(products);
						}
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to add product",
			});
		}
	};

	async add(req: Request, res: Response) {
		try {
			const cookieToken: string = req.cookies.userToken;
			if (cookieToken) {
				const groupProduct: Product[] = await ProductModel.find({
					prodId: req.body.prodId,
				});

				const sizeList: Size[] = groupProduct.map(product => {
					return {
						[product.size]: product._id
					}
				})

				const item = {
					product: req.body._id,
					size: req.body.size,
					amount: req.body.amount,
					sizes: sizeList
				};

				await CartService.add(cookieToken, item);
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err, products) {
						if (err) {
							console.log('error:' + err);
						} else {
							products?.products.map(item => {
								item.sum = item.amount * item.product.price.base
							})
							const prices = products?.products.map(item => item.product.price.base * item.amount)
							const total = prices?.reduce((partialSum, item)=> partialSum + item, 0);
							res.json(products);
						}
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to add product",
			});
		}
	}

	async remove(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				await CartService.remove(cookieToken, req.body._id);
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err, products) {
						if (err) {
							console.log('error:' + err);
						} else {
							products?.products.map(item => {
								item.sum = item.amount * item.product.price.base
							})
							const prices = products?.products.map(item => item.product.price.base * item.amount)
							const total = prices?.reduce((partialSum, item)=> partialSum + item, 0);

							res.json(products);
						}
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to remove product",
			});
		}
	}

	async update(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				await CartService.update(cookieToken, req.body._id, req.body.amount);
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err, products) {
						if (err) {
							console.log('error:' + err);
						} else {
							products?.products.map(item => {
								item.sum = item.amount * item.product.price.base
							})
							const prices = products?.products.map(item => item.product.price.base * item.amount)
							const total = prices?.reduce((partialSum, item)=> partialSum + item, 0);

							res.json(products);
						}
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to update product",
			});
		}
	}
}

export default new CartController();