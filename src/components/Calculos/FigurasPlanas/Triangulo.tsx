import { useState } from "react";
import { TResultados, TValoresTriangulo } from "../../../types/TTriangulo";

export const CalculoTriangulo = () => {
  const [valoresArea, setValoresArea] = useState<TValoresTriangulo>({
    base: null,
    altura: null,
    hipo: null
  })

  const [resultados, setResultados] = useState<TResultados>({
    area: null,
    perimetro: null
  })

  const calcularArea = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!valoresArea.base || !valoresArea.altura) return;

    const area = (valoresArea.base * valoresArea.altura) / 2;

    setResultados({
      ...resultados,
      area: `O valor da área é: ${area.toString()}`
    })
  }

  const calcularPerimetro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valoresArea.altura || !valoresArea.base || !valoresArea.hipo) return;
    
    const perimetro = (valoresArea.altura + valoresArea.base + valoresArea.hipo);

    setResultados({
      ...resultados,
      perimetro: `O valor do perímetro é: ${perimetro.toString()}`
    })
  }

  const changedValue = (field: "base" | "altura" | "hipo") => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setValoresArea({
        ...valoresArea,
        [field]: Number(event.target.value)
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <form onSubmit={calcularArea} className="text-white flex flex-col items-center justify-center gap-4">
        <h3 className="text-slate-500 text-lg">Cálculo da Área</h3>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="baseAltura">Digite a base</label>
          <input 
            type="number" 
            placeholder="Base"
            id="baseAltura"
            required
            onChange={changedValue("base")}
            className="bg-slate-600 rounded-lg p-1"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="alturaArea">Digite a altura</label>
          <input 
            type="number"
            required
            id="alturaArea"
            placeholder="Altura"
            onChange={changedValue("altura")}
            className="bg-slate-600 rounded-lg p-1"
          />
        </div>
        <button type="submit" className="bg-slate-500 hover:bg-slate-400 p-1 rounded-lg">Calcular área</button>
        { resultados.area && (
          <h4 className="">{resultados.area}</h4>
        ) }
      </form>

      <form onSubmit={calcularPerimetro} className="text-white flex flex-col items-center justify-center gap-4">
        <h3 className="text-slate-500 text-lg">Perímetro</h3>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="catetoAd">Digite o cateto adjacente</label>
          <input 
            className="bg-slate-600 rounded-lg p-1"
            id="catetoAd" 
            type="number" 
            placeholder="Cateto Adjacente" 
            required
            onChange={changedValue("base")}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="catetoOp">Digite o cateto oposto</label>
          <input 
            className="bg-slate-600 rounded-lg p-1" 
            id="catetoOp" 
            type="number" 
            placeholder="Cateto Oposto" 
            required
            onChange={changedValue("altura")}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="hipotenusa">Digite a hipotenusa</label>
          <input 
            className="bg-slate-600 rounded-lg p-1" 
            id="hipotenusa" 
            type="number" 
            placeholder="Hipotenusa" 
            required
            onChange={changedValue("hipo")}
          />
        </div>
        <button type="submit" className="bg-slate-500 hover:bg-slate-400 p-1 rounded-lg">Calcular perímetro</button>
        { resultados.perimetro && <h4>{resultados.perimetro}</h4> }
      </form>
    </div>
  )
}