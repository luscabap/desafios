import { useNavigate } from "react-router-dom"
import { desafios } from "../../data/desafios"

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl">DESAFIO PARA OS DEVS!</h1>
      {
        desafios.map(desafio => (
          <h2 onClick={() => navigate(`desafio/${desafio.slug}`)} className="cursor-pointer">{desafio.enunciado}</h2>
        ))
      }
    </div>
  )
}