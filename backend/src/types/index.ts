import mongoose from "mongoose";

export interface Product {
	_id: string;
	prodId: number;
	category: string[];
	price: {
		base: number;
		currency: string;
	};
	size: string;
	amount: number;
	features?: string[];
	colors?: string[];
	images?: string[];
	title: string;
	link: string;
}

export interface ProductGroup {
	_id: string;
	items: Product[];
}

export type Size = {
	[x: string]: string;
}

export type NavigationSubItem = {
	id: number;
	dataImage: string;
	title: string;
	link: string;
}

export interface NavigationItem {
	_id: string;
	title: string;
	link: string;
	dataImage: string;
	submenu: NavigationSubItem[];
}

export interface Post {
	_id: string;
	title: string;
	text: string;
	viewsCount: number;
	imageUrl: string;
}

export type GuestProduct = {
	size: string;
	amount: number;
	sum: number;
	product: Product;
	sizes: Size[];
}

export interface Guest {
	_id: string;
	token: string;
	products: GuestProduct[];
}
