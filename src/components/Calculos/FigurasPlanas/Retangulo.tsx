import { useState } from "react";

type TCalculos = {
  area: number,
  perimetro: number
}

export const CalculoRetangulo = () => {
  const [valores, setValores] = useState({
    altura: 0,
    largura: 0,
  });

  const [res, setRes] = useState<TCalculos>({
    area: 0,
    perimetro: 0,
  });

  const [erro, setError] = useState(false);

  const validaValores = () => {
    if (valores.altura === 0 || valores.largura === 0) {
      setError(true)
    }
    else{
      setError(false);
    }
  }

  const calcArea = () => {
    validaValores()
    const area = valores.altura * valores.largura;

    setRes({
      ...res,
      area,
    });
  };

  const calcPerimetro = () => {
    validaValores()
    const perimetro = valores.altura * 2 + valores.largura * 2;

    setRes({
      ...res,
      perimetro,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h3>Cálculo da Área e Perímetro</h3>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="">Digite a altura do retângulo.</label>
        <input
          type="number"
          required
          className="text-white p-1 rounded-lg bg-slate-600"
          onChange={(e) =>
            setValores({
              ...valores,
              altura: Number(e.target.value),
          })
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="">Digite a largura do retângulo.</label>
        <input
          required
          type="number"
          className="text-white p-1 rounded-lg bg-slate-600"
          onChange={(e) =>
            setValores({
              ...valores,
              largura: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="flex gap-4 items-center justify-center">
        <button onClick={calcArea} className="hover:text-slate-400">Calcular Área</button>
        <button onClick={calcPerimetro} className="hover:text-slate-400">Calcular Perímetro</button>
      </div>
      { erro && <h5 className="text-red-500">Verifique os campos digitados</h5> }
      <div className="flex gap-4 items-center justify-center">
        {res.area > 0 && <h4 className="">A área é: {res.area}</h4>}
        {res.perimetro > 0 && <h4 className="">O perímetro é: {res.perimetro}</h4>}
      </div>
    </div>
  );
};
