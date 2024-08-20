import axios from "axios"
import { useState } from "react";
import { Product } from "../types/TProducts";
import { TApiResponse } from "../types/TApiResponse";

const useFetchProducts = async () => {
  const [data, setData] = useState<Product[] | null>(null);
  const res = await axios.get<TApiResponse>("https://dummyjson.com/products");
  console.log("res", res)
  setData(res.data.products)

  return (
    data
  )
}

export default useFetchProducts;