import { Product } from "./TProducts";

export type TApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};