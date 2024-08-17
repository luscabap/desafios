import { useNavigate, useParams } from "react-router-dom";
import { desafios } from "../../data/desafios";
import { RecordResolucoes } from "../../components/Resolucao/RecordResolucoes";
import { TitleSection } from "../../components/TitleSection";
import { IoIosArrowBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export const DesafioPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const desafio = desafios.find(desafio => desafio.slug === params.slugDesafio);
  return (
    desafio &&
    <AnimatePresence>
      <motion.div className="my-5 flex flex-col items-center justify-center gap-20 w-1/2">
          <TitleSection text={desafio.nome} contrast={true} size="large"/>
          <motion.div 
            className="w-full"
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
          >
            {
              RecordResolucoes[desafio.resolucao]
            }
          </motion.div>

          <motion.button 
            className="text-slate-500 flex items-center justify-center w-full" onClick={() => navigate("/")}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
          >
            <IoIosArrowBack />
            <span>Voltar a HomePage</span>
          </motion.button>
      </motion.div>
    </AnimatePresence>
  )
};
