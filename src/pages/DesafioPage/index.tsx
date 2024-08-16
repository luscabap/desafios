import { useNavigate, useParams } from "react-router-dom";
import { desafios } from "../../data/desafios";
import { RecordResolucoes } from "../../components/Resolucao/RecordResolucoes";
import { TitleSection } from "../../components/TitleSection";
import { IoIosArrowBack } from "react-icons/io";

export const DesafioPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const desafio = desafios.find(desafio => desafio.slug === params.slugDesafio);
  return (
    desafio && 
    <div className="my-5 flex flex-col gap-20">
        <TitleSection text={desafio.nome} contrast={true} size="large"/>
        <div>
          {
            RecordResolucoes[desafio.resolucao]
          }
        </div>

        <button className="text-slate-500 flex items-center justify-center w-full" onClick={() => navigate("/")}>
          <IoIosArrowBack />
          <span>Voltar a HomePage</span>
        </button>
    </div>
  )
};
