import { useState } from "react";
import { SecaoDesafio } from "../../SecaoDesafio";

const CalculoIMC = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<string | null>();
  const [categoria, setCategoria] = useState<string | null>();

  const submitIMC = (
    peso: number,
    altura: number,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const imcCalculado = (peso / altura ** 2) * 10000;

    const textoImc = `O seu IMC é ${imcCalculado.toFixed(2).toString()}`;

    setImc(textoImc);

    const categoria = (num: number) => {
      switch (true) {
        case num <= 18.5:
          return "Magreza";
        case num >= 18.6 && num <= 24.9:
          return "Normal";
        case num >= 25 && num <= 29.9:
          return "Sobrepeso";
        case num >= 30 && num <= 39.9:
          return "Obesidade";
        case num >= 40:
          return "Obesidade grave";
        default:
      }
    };

    const categoriaIMc = categoria(imcCalculado);
    setCategoria(categoriaIMc);
  };

  return (
    <SecaoDesafio>
      <form
        onSubmit={(e) => submitIMC(peso, altura, e)}
        className="flex flex-col items-center justify-center gap-8 w-full"
      >
        <div className="flex flex-col items-center justify-center gap-2 w-1/3">
          <label htmlFor="peso">Digite o seu peso (Ex: 80)</label>
          <input
            id="peso"
            className="bg-zinc-700"
            type="number"
            placeholder="Kilos"
            onChange={(e) => setPeso(Number(e.target.value))}
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-1/3">
          <label htmlFor="altura">Digite a sua altura (Ex: 180)</label>
          <input
            id="altura"
            className="bg-zinc-700"
            type="number"
            placeholder="Centímetros"
            onChange={(e) => setAltura(Number(e.target.value))}
            required
          />
        </div>
        <button className="bg-slate-600 rounded-lg px-1 hover:bg-slate-400">
          Calcular IMC
        </button>
      </form>
      <table className="bg-slate-500 w-full rounded-lg my-8">
        <tr className="text-center text-black py-4">
          <th>IMC</th>
          <th>CLASSFICAÇÃO</th>
          <th>OBESIDADE GRAU</th>
        </tr>
        <tr className="text-center text-black border-solid border-[1px] border-black">
          <td>MENOR QUE 18,5</td>
          <td>MAGREZA</td>
          <td>0</td>
        </tr>
        <tr className="text-center text-black border-solid border-[1px] border-black">
          <td>ENTRE 18,5 E 24,9</td>
          <td>NORMAL</td>
          <td>0</td>
        </tr>
        <tr className="text-center text-black border-solid border-[1px] border-black">
          <td>ENTRE 25 E 29,9</td>
          <td>SOBREPESO</td>
          <td>1</td>
        </tr>
        <tr className="text-center text-black border-solid border-[1px] border-black">
          <td>ENTRE 30 E 39,9</td>
          <td>OBESIDADE</td>
          <td>2</td>
        </tr>
        <tr className="text-center text-black border-solid border-[1px] border-black rounded-lg">
          <td>MAIOR QUE 40</td>
          <td>OBESIDADE GRAVE</td>
          <td>3</td>
        </tr>
      </table>
      {imc && <h5>{imc}</h5>}
      {categoria && <h5>A classificação do seu IMC é {categoria}</h5>}
    </SecaoDesafio>
  );
};

export default CalculoIMC;
