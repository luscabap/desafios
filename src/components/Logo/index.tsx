import desafio from "/challenge.svg";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/6">
      <h1>DPD - Desafio Para Devs</h1>
      <img src={desafio} alt="Imagem de um quebra-cabeça" className="w-10 h-10"/>
    </div>
  )
}