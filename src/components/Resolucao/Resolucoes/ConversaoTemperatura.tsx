import { useState } from "react";
import { SecaoDesafio } from "../../SecaoDesafio";

export const ConversaoTemperatura = () => {
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
  return (
    <SecaoDesafio title="Conversão temperatura">
    <div >
      <form action="" onSubmit={(e) => handleSubmitTemperatura(num, opcao, e)} className='containerTemperatura'>
        <input type="number" required onChange={e=> setNum(Number(e.target.value))}/>
        <select required onChange={e => setOpcao(e.target.value)}>
          <option content=''>

          </option>
          <option content='celsius'>
            Celsius
          </option>
          <option content='fahrenheit'>
            Fahrenheit
          </option>
        </select>
        <button type='submit'>Converter para {opcao === "" ? "" : opcao === "Celsius" ? "Fahrenheit" : "Celsius"}</button>
      </form>
      {valorConvertido && <h5>O valor é {valorConvertido}</h5>}
    </div>
  </SecaoDesafio>
  )
}