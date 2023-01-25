import {Status} from "../../@types";
import {Product, Size} from "../productPreview/types";

export type CartSliceState = {
	visitor: CartGroup;
	status: Status
};

export type CartItemNew = {
	prodId: string;
	_id: string | undefined;
	size: string | undefined;
	amount: number;
};

export type CartCase = {
	amount: number;
	product: Product;
	size: string;
	sizes: Size[];
	_id: string;
}

export type CartGroup = {
	products: CartCase[];
	token: string;
	_id: string
}