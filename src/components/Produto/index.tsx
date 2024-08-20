import { Product } from "../../types/TProducts"

export const Produto = ({ produto, num }: { produto: Product, num: number }) => {
  return (
    <div className="bg-slate-500 w-1/3 flex flex-col items-center justify-center p-2 rounded-lg gap-3 relative min-h-80">
      <h6 className="absolute top-2 right-2 font-bold">{num + 1}</h6>
      <h2>{produto.title}</h2>
      <h3>Preço: R${produto.price.toFixed(2)}</h3>
      <p className="text-xs">{produto.description}</p>
      <span>Quantidade: {produto.stock}</span>
    </div>
  )
}