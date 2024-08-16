import { useParams } from "react-router-dom";
import { desafios } from "../../data/desafios";
import { RecordResolucoes } from "../../components/Resolucao/RecordResolucoes";
import { TitleSection } from "../../components/TitleSection";

export const DesafioPage = () => {
  const params = useParams();

  const desafio = desafios.find(desafio => desafio.slug === params.slugDesafio);

  return (
    desafio && 
    <>
        <TitleSection text={desafio.nome} />
        {
          RecordResolucoes[desafio.resolucao]
        }
    </>
  )
};
