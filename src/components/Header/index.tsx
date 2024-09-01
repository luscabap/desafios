import { useNavigate, useParams } from "react-router-dom"
import { Logo } from "../Logo";
import { desafios } from "../../data/desafios";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

export const Header = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [desafiosIsOpen, setDesafiosIsOpen] = useState(false);

  const toggleDesafioIsOpen = () => {
    setDesafiosIsOpen(pv => !pv)
  }

  useEffect(() => {
    setDesafiosIsOpen(false)
  }, [params])

  const clickedDesafioItem = (slug: string) => {
    navigate(`/desafio/${slug}`)
  }

  return (
    <header className="bg-slate-600 w-full flex items-center justify-between px-2 py-1">
      <Logo />
      <button onClick={() => navigate("/")} className="cursor-pointer flex-1 hover:text-slate-400">Home</button>
      <nav className="relative text-right flex-1">
        <h3 onClick={toggleDesafioIsOpen} className="cursor-pointer text-center hover:text-slate-400">Desafios</h3>
        <AnimatePresence>
          {desafiosIsOpen && (
            <motion.ul 
              className="bg-slate-700 py-4 px-3 absolute mt-6 w-full flex flex-col items-start justify-center gap-4 rounded-b-lg origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            >
              {desafios.map(desafio => (
                <motion.li 
                  key={desafio.id} onClick={() => clickedDesafioItem(desafio.slug)} className="cursor-pointer hover:text-slate-500"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                    {desafio.nome}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

      </nav>
    </header>
  )
}