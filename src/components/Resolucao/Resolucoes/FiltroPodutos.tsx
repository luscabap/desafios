import { useEffect, useState } from "react";
import { Product } from "../../../types/TProducts";
import { TApiResponse } from "../../../types/TApiResponse";

const FiltroProdutos = () => {
  const [data, setData] = useState<null | Product[]>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const info: TApiResponse = await res.json()
      setData(info.products)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  if (isLoading){
    return <div>CARREGANDO...</div>
  }

  return (
    <div>
      { data && (
        data.map(item => <h4 key={item.id}>{item.brand}</h4>)
      )}
    </div>
  )
}

export default FiltroProdutos;