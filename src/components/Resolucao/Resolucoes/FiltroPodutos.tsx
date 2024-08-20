import { useEffect, useState } from "react";
import { Product } from "../../../types/TProducts";
import fetchProducts from "../../../utils/fetchProducts";
import { Produto } from "../../Produto";

type OrdemType = "padrao" | "prc-asc" | "prc-desc" | "qtd-asc" | "qtd-desc";

const FiltroProdutos = () => {
  const [data, setData] = useState<Product[]>([]);
  const [dataShadow, setDataShadow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ordemProdutos, setOrdemProdutos] = useState<OrdemType>("padrao");

  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await fetchProducts();
      setData(dataApi.products);
      setDataShadow(dataApi.products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>CARREGANDO...</div>;
  }
  
  const onChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataShadow(data);
    setOrdemProdutos(e.target.value as OrdemType);

    if (!dataShadow) return [];

    const validatedData = dataShadow.filter(item => item !== undefined);

    const filteredData = validatedData.sort((a, b) => {
      switch (ordemProdutos) {
        case "padrao":
          return (a.price - b.price);
        case "prc-asc":
          return (b.price - a.price);
        case "prc-desc":
          return (a.price - b.price);
        case "qtd-asc":
          return (b.stock - a.stock);
        case "qtd-desc":
          return (a.stock - b.stock);
        default:
          []
          break;
      }
    })

    setDataShadow(filteredData)
  };
  

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <select onChange={onChangeOrder} className="bg-slate-400 self-start p-2 rounded-lg">
        <option value="padrao">Selecione uma opção</option>
        <option value="prc-asc">Preço - Ordem crescente</option>
        <option value="prc-desc">Preço - Ordem decrescente</option>
        <option value="qtd-asc">Quantidade - Ordem crescente</option>
        <option value="qtd-desc">Quantidade - Ordem decrescente</option>
      </select>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {dataShadow &&
          dataShadow?.map((item, i) => (
            <Produto produto={item} key={item.id} num={i}/>
        ))}
      </div>
    </div>
  );
};

export default FiltroProdutos;
