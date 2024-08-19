import { useState } from "react";

type TResultados = {
  area: null | string,
  perimetro: null | string,
}

type TValoresTriangulo = {
  base: null | number,
  altura: null | number,
  hipo: null | number,
}

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
    // if (valoresArea.altura & valoresArea.base !== null)  {
    //   console.log("n é null")
    // }
    const area = (valoresArea.base! * valoresArea.altura!) / 2;

    setResultados({
      ...resultados,
      area: `O valor da área é ${area.toString()}`
    })
  }

  return (
    <div>
      <form onSubmit={calcularArea} className="text-white flex flex-col items-center justify-center gap-4">
        <h3 className="text-slate-500 text-lg">Cálculo da Área</h3>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="baseAltura">Digite a base</label>
          <input 
            type="number" 
            placeholder="Base"
            id="baseAltura"
            required
            onChange={e => setValoresArea({
            ...valoresArea,
            base: Number(e.target.value)
            })}
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
            onChange={e => setValoresArea({
              ...valoresArea,
              altura: Number(e.target.value)
            })}
            className="bg-slate-600 rounded-lg p-1"
          />
        </div>
        <button type="submit" className="bg-slate-500 hover:bg-slate-400 p-1 rounded-lg">Calcular área</button>
        { resultados.area && (
          <h4 className="">{resultados.area}</h4>
        ) }
      </form>
      <form>
        <h3>Perímetro</h3>
        <input type="number" placeholder="Digite o cateto adjacente"/>
        <input type="number" placeholder="Digite o cateto oposto"/>
        <input type="number" placeholder="Digite a hipotenusa"/>
        <button type="submit">Calcular perímetro</button>
      </form>
    </div>
  )
}