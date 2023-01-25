
export type Product = {
  prodId: string;
  _id: string;
  category: string[];
  price: {
    base: number;
    currency: string;
  };
  size: string;
  features: string[];
  colors: string[];
  images: string[];
  title: string;
  link: string;
};

export interface SearchSliceState {
  value: string;
  result: Product[];
  status: string;
}
