import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


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
      {descIsOpen && (
        <div className="flex flex-col gap-4 items-start justify-start">
          <span className="text-slate-500 font-bold">O QUE FAZER?</span>
          <p>{descricao}</p>
          <button
            onClick={() => navigate(`/desafio/${slug}`)}
            className="flex items-center justify-center gap-2 text-slate-600 hover:text-slate-400"
          >
            <span>Ir pra desafio</span>
            <FaArrowRightLong size={22}/>
          </button>
        </div>
      )}
    </>
  );
};
