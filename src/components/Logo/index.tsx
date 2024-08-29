import { useNavigate } from "react-router-dom";
import desafio from "/challenge.svg";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/6 flex items-center justify-center flex-col">
      <h1>DPD - Desafio Para Devs</h1>
      <img src={desafio} alt="Imagem de um quebra-cabeça" className="w-10 h-10 cursor-pointer" onClick={() => navigate("/")}/>
    </div>
  )
}