import {ProductModel} from "../../models";
import {Product, Size} from "../../types";

class ProductService {
  async getAll() {
    return ProductModel.aggregate([
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

  async getNew() {
    const products = await ProductModel.aggregate([
      {
        $group: {
          _id: "$prodId",
          items: {
            $push: "$$ROOT"
          }
        }
      }
    ]).sort({_id: -1}).limit(4);

    return products.map(product => {
      let prodSizes: Size[] = [];
      product.items.forEach((item: Product) => {
        const key = item.size;
        const size = {
          [key]: item._id
        }
        prodSizes.push(size)
      })

      return {
        ...product.items[0],
        sizes: prodSizes
      }
    })
  };

  async getOne(id: string) {
    if (!id) {
      throw new Error('ID is not specified')
    }

    return ProductModel.findOne({
      _id: id,
    });
  };

  async update(product: Product) {
    if (!product._id) {
      throw new Error('ID is not specified')
    }
    return ProductModel.findByIdAndUpdate(product._id, product, {new: true});
  }

  async delete(id: string) {
    if (!id) {
      throw new Error('ID is not specified')
    }
    return ProductModel.findByIdAndDelete(id);
  }
}

export default new ProductService();