import {GuestModel} from "../../models";
import {Size} from "../../types";

class CartService {
	async getAll(userToken: string) {
		return GuestModel
			.findOne({token: userToken})
			.populate({path: 'products.product'})
			.exec(function (err: any, products: any) {
				if (err) {
					console.log('error:' + err)
				} else {
					return products;
				}
			});
	};

	async add(userToken: string, product: { product: string, amount: number; size: string; sizes: Size[] }) {  // product: string = _id
		const guest = await GuestModel.findOneAndUpdate({
			token: userToken
		}, {
			$push: {products: product}
		});
		return guest && guest.products
	}

	async remove(userToken: string, id: string) {
		return await GuestModel.updateOne(
			{token: userToken},
			{
				"$pull": {
					"products": {
						_id: id,
					}
				}
			}
		)
	}

	async update(userToken: string, id: string, amount: string) {
		return await GuestModel.findOneAndUpdate({
			token: userToken,
			"products._id": id
		}, {
			$set: {
				"products.$.amount": amount
			},
		}, {
			returnDocument: 'after'
		})
	}
}

export default new CartService();