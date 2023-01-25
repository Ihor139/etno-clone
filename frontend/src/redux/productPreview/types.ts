import {Status} from "../../@types";

export interface ProductPreviewSliceState {
	items: Product[];
	status: Status;
}

export type Size = {
	[x: string]: string;
}

export type Product = {
	amount: number;
	category: string[];
	colors?: string[];
	features?: string[];
	images?: string[];
	link: string;
	price: {
		base: number;
		currency: string;
	};
	prodId: string,
	size: string;
	title: string;
	_id: string;
	sizes: Size[]; // ????????
};
