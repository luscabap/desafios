import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FcIdea } from "react-icons/fc";
import { motion } from "framer-motion";

export const Dica = ({ text }: {text: string}) => {
  const [tipIsHiden, setTipIsHiden] = useState(true);
  return (
    <div className="flex items-center justify-start gap-2 w-full">
      <FcIdea size={25} className="cursor-pointer" onClick={() => setTipIsHiden(pv => !pv)}/>  
      <div className="relative w-full">
        <AnimatePresence>
          { tipIsHiden && (
            <motion.p 
              className="absolute bg-slate-700 w-full origin-right pl-2 rounded-lg h-full"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.2 }}
            >Clique na lâmpada para revelar a dica.</motion.p>
          )}
        </AnimatePresence>
        <p className="w-full h-full">{text}</p>
      </div>
    </div>
  )
}