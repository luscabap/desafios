import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";


type TSobreDesafio = {
  descricao: string;
  slug: string;
  nome: string;
};

export const SobreDesafio = ({ descricao, slug, nome }: TSobreDesafio) => {
  const navigate = useNavigate();
  const [descIsOpen, setDescIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setDescIsOpen(pv => !pv)}
        className="inline-flex items-center justify-start cursor-pointer border-solid border-2 border-slate-600 p-1 rounded-lg w-1/2"
      >
        <h2>{nome}</h2>
        { descIsOpen ? <IoMdArrowDropup size={22}/> : <IoMdArrowDropdown size={22}/>}
      </div>
      <AnimatePresence>
        {descIsOpen && (
          <motion.div 
            className="flex flex-col gap-4 items-start justify-start origin-top"
            initial={{ scaleY: 0, opacity: 0, }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-slate-500 font-bold">O QUE FAZER?</span>
            <p>{descricao}</p>
            <button
              onClick={() => navigate(`/desafio/${slug}`)}
              className="flex items-center justify-center gap-2 text-slate-600 hover:text-slate-400"
            >
              <span>Ir pra desafio</span>
              <FaArrowRightLong size={22}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
