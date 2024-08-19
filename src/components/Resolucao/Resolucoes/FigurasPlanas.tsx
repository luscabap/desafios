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
        setFigura(<div>retangulo componente</div>)
        break;
      case "quadrado":
        <div>quadrado</div>
        break;
      case "circulo":
        <div>circulo</div>
        break;
      default:
        break;
    }
  }, [figura])

  return (
    <div>
      <div>
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
          <>{figura}</>
        }
      </div>
    </div>
  )
}

export default FigurasPlanas;