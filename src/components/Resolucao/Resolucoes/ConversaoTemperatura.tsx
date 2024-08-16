import { useState } from "react";
import { SecaoDesafio } from "../../SecaoDesafio";

const ConversaoTemperatura = () => {
  const [valorConvertido, setValorConvertido] = useState<string | null>(null);
  const [num, setNum] = useState<number>(0);
  const [opcao, setOpcao] = useState<string>("");
  const handleSubmitTemperatura = (valorTemperatura: number, opcaoTemperatura: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const operatorTemperatura = opcaoTemperatura === "Celsius" ? true : false;

    const temperaturaConvertida = operatorTemperatura
    ? (valorTemperatura * (9/5)) + 32
    : ((valorTemperatura - 32) * 5/9)


    setValorConvertido(`${temperaturaConvertida.toFixed(2).toString()} °${operatorTemperatura ? "F" : "C"}`)
  }

  const changedOpcaoMedida = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValorConvertido(null)
    setOpcao(e.target.value)
  }

  return (
    <SecaoDesafio>
    <div>
      <form action="" onSubmit={(e) => handleSubmitTemperatura(num, opcao, e)} className='containerTemperatura flex flex-col gap-8'>
        <div className="flex flex-col items-start justify-start">
          <label htmlFor="">Digite o valor</label>
          <input type="number" required onChange={e=> setNum(Number(e.target.value))} className="bg-zinc-700"/>
        </div>
        <div className="flex flex-col items-start justify-start">
          <label htmlFor="">Selecione a unidade de medida</label>
          <select required onChange={changedOpcaoMedida} className="bg-zinc-700">
            <option content=''>

            </option>
            <option content='celsius'>
              Celsius
            </option>
            <option content='fahrenheit'>
              Fahrenheit
            </option>
          </select>
        </div>
        { opcao === ""
        ? <h5>Por favor, selecione uma unidade de medida</h5>
        : <button type='submit'>Converter para {opcao === "Celsius" ? "Fahrenheit" : "Celsius"}</button>
        }
        
      </form>
      {valorConvertido && <h5 className="text-center">{valorConvertido}</h5>}
    </div>
  </SecaoDesafio>
  )
}

export default ConversaoTemperatura;