import { useEffect, useState } from "react";
import { Product } from "../../../types/TProducts";
import fetchProducts from "../../../utils/fetchProducts";
import { Produto } from "../../Produto";
import { FaSearch } from "react-icons/fa";

type OrdemType = "padrao" | "prc-asc" | "prc-desc" | "qtd-asc" | "qtd-desc";
type PesquisaProduto = string

const FiltroProdutos = () => {
  const [data, setData] = useState<Product[]>([]);
  const [dataShadow, setDataShadow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ordemProdutos, setOrdemProdutos] = useState<OrdemType>("padrao");
  const [pesquisaProduto, setPesquisaProduto] = useState<PesquisaProduto>("");
  const [erroMsg, setErroMsg] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await fetchProducts();
      setData(dataApi.products);
      setDataShadow(dataApi.products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
      const validatedData = data.filter(item => item !== undefined);

      const filteredData = [...validatedData].sort((a, b) => {
        switch (ordemProdutos) {
          case "padrao":
            return a.price - b.price;
          case "prc-asc":
            return a.price - b.price;
          case "prc-desc":
            return b.price - a.price;
          case "qtd-asc":
            return a.stock - b.stock;
          case "qtd-desc":
            return b.stock - a.stock;
          default:
            return a.price - b.price;
        }
      })
  
      setDataShadow(filteredData);
      
  }, [ordemProdutos, data])

  const searchItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pesquisaProduto !== ""){
      const filteredData = data.filter(item => item.title === pesquisaProduto)
      setErroMsg(false)
      
      filteredData.length > 0
      ? setDataShadow(filteredData)
      : setDataShadow([])
    } else {
      setErroMsg(true)
    }
  }

  if (isLoading) {
    return <div>CARREGANDO...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="w-full flex items-center justify-between gap-4">
        <select onChange={e => setOrdemProdutos(e.target.value as OrdemType)} className="bg-slate-700 self-start p-2 rounded-lg">
          <option value="padrao">Selecione uma opção</option>
          <option value="prc-asc">Preço - Ordem crescente</option>
          <option value="prc-desc">Preço - Ordem decrescente</option>
          <option value="qtd-asc">Quantidade - Ordem crescente</option>
          <option value="qtd-desc">Quantidade - Ordem decrescente</option>
        </select>
        <form onSubmit={searchItem} className="flex flex-col items-center justify-center w-full gap-2">
          <div className="flex w-full gap-2">
            <input 
              type="text" 
              className="w-full bg-slate-700 self-start p-2 rounded-lg" 
              placeholder="Pesquisar item" 
              value={pesquisaProduto}
              onChange={e => setPesquisaProduto(e.target.value)}
            />
            
            <button type="submit">
              <FaSearch size={30}/>
            </button>
          </div>
          {erroMsg && <h5 className="text-red-500 w-full">Por favor, digite algo para pesquisar.</h5>}
        </form>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        { dataShadow.length === 0 ? <div>O PRODUTO "<span className="font-light">{pesquisaProduto}</span>" NÃO FOI ENCONTRADO!</div> : ""}
        {dataShadow &&
          dataShadow?.map((item, i) => (
            <Produto produto={item} key={item.id} num={i}/>
        ))}
      </div>
    </div>
  );
};

export default FiltroProdutos;
