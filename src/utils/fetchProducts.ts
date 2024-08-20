import axios from "axios";
import { TApiResponse } from "../types/TApiResponse";

const fetchProducts = async () => {
  const res = await axios.get<TApiResponse>("https://dummyjson.com/products");
  return res.data;
};

export default fetchProducts;