import { ReactNode, useEffect, useState } from "react";
import { CalculoTriangulo } from "../../Calculos/FigurasPlanas/Triangulo";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { InfoWithIcon } from "../../InfoWithIcon";
import { GrUserWorker } from "react-icons/gr";
import { CalculoRetangulo } from "../../Calculos/FigurasPlanas/Retangulo";


const FigurasPlanas = () => {
  const [figura, setFigura] = useState<null | ReactNode>(null);

  useEffect(() => {
    switch (figura) {
      case null:
        setFigura(<InfoWithIcon 
            icon={<FaLongArrowAltLeft />} 
            text="Por favor, selecione uma figura plana para calcular."
            directionPrimay={true}
            />)
        break;
      case "":
        setFigura(<InfoWithIcon 
          icon={<FaLongArrowAltLeft />} 
          text="Por favor, selecione uma figura plana para calcular."
          directionPrimay={true}
          />)
        break;
      case "triangulo":
        setFigura(<CalculoTriangulo />)
        break;
      case "retangulo":
        setFigura(<CalculoRetangulo />)
        break;
      case "quadrado":
        setFigura(<InfoWithIcon 
          icon={<GrUserWorker />} 
          text="EM CONSTRUÇÃO..."
          directionPrimay={true}
          />)
        break;
      case "circulo":
        setFigura(<InfoWithIcon 
          icon={<GrUserWorker />} 
          text="EM CONSTRUÇÃO..."
          directionPrimay={true}
          />)
        break;
      case "trapezio":
        setFigura(<InfoWithIcon 
          icon={<GrUserWorker />} 
          text="EM CONSTRUÇÃO..."
          directionPrimay={true}
          />)
        break;
      case "losango":
        setFigura(<InfoWithIcon 
          icon={<GrUserWorker />} 
          text="EM CONSTRUÇÃO..."
          directionPrimay={true}
          />)
        break;
      default:
        break;
    }
  }, [figura])

  return (
    <div>
      <div className="flex flex-col items-start justify-start">
        <select required 
          className="text-white bg-slate-600 p-1 rounded-lg"
          onChange={e => setFigura(e.target.value)}
        >
          <option value="">Selecione uma opção</option>
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