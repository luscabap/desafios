import { useState } from 'react';
import './App.css'
import { SecaoDesafio } from './components/SecaoDesafio'

function App() {
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
  
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<string | null>();
  const [categoria, setCategoria] = useState<string | null>();

  const submitIMC = (peso: number, altura: number, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imcCalculado = ((peso / altura ** 2)*10000)

    const textoImc = `O seu IMC é ${(imcCalculado.toFixed(2).toString())}`;

    setImc(textoImc)

    const categoria = (num: number) => {
      switch (true) {
        case (num <= 18.5):
           return "MAGRO"
        case (num >= 18.6 && num <= 24.9):
          return "normal"
        default: return "dsadaws"
    }}

    const categoriaIMc = categoria(imcCalculado);
    setCategoria(categoriaIMc);
  }

  return (
    <div
      className='bg-[#242424] text-white font-roboto min-h-screen flex flex-col items-center justify-start'
    >
      <h1>Desafios</h1>

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

      <SecaoDesafio title='Calcular IMC'>
        <div>
          <form onSubmit={(e) => submitIMC(peso, altura, e)}>
            <input type="number" placeholder='Digite o seu peso em kg' 
            onChange={e => setPeso(Number(e.target.value))}/>
            <input type="number" placeholder='Digite a sua altura em cm' 
            onChange={e => setAltura(Number(e.target.value))}/>
            <button>Calcular IMC</button>
          </form>
          { imc && <h5>{imc}</h5> }
          {categoria && <h5>{categoria}</h5>}
        </div>
      </SecaoDesafio>
    </div>
  )
}

export default App
