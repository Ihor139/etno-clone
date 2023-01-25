import {PostModel} from "../../models";

class PostService {
	async getAll() {
		return PostModel.find();
	};

	async getOne(id: string) {
		if (!id) {
			throw new Error('ID is not specified')
		}
		PostModel.findOneAndUpdate({
			_id: id,
		}, {
			$inc: {viewsCount: 1},
		}, {
			returnDocument: 'after'
		}, (err, doc) => {
			if (err) {
				throw new Error("Failed to receive post")
			}
			if (!doc) {
				throw new Error("Article not found")
			}
			return doc;
		})
	};
}

export default new PostService();