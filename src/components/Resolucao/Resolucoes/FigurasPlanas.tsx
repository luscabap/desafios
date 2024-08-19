import { ReactNode, useEffect, useState } from "react";
import { CalculoTriangulo } from "../../Calculos/FigurasPlanas/Triangulo";

const FigurasPlanas = () => {
  const [figura, setFigura] = useState<null | ReactNode>(null);

  useEffect(() => {
    switch (figura) {
      case "triangulo":
        setFigura(<CalculoTriangulo />)
        break;
      case "retangulo":
        setFigura(<div>EM CONSTRUÇÃO...</div>)
        break;
      case "quadrado":
        setFigura(<div>EM CONSTRUÇÃO...</div>)
        break;
      case "circulo":
        setFigura(<div>EM CONSTRUÇÃO...</div>)
        break;
      case "trapezio":
        setFigura(<div>EM CONSTRUÇÃO...</div>)
        break;
      case "losango":
        setFigura(<div>EM CONSTRUÇÃO...</div>)
        break;
      default:
        break;
    }
  }, [figura])

  return (
    <div>
      <div className="flex flex-col items-start justify-start">
        <select required 
          className="text-black bg-slate-600 p-1 rounded-lg"
          onChange={e => setFigura(e.target.value)}
        >
          <option value="" content=""></option>
          <option value="triangulo">Triângulo</option>
          <option value="retangulo">Retângulo</option>
          <option value="quadrado">Quadrado</option>
          <option value="circulo">Círculo</option>
          <option value="trapezio">Trapézio</option>
          <option value="losango">Losango</option>
        </select>
        {
          <div className="self-center">{figura}</div>
        }
      </div>
    </div>
  )
}

export default FigurasPlanas;