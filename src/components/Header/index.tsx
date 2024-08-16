import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo";
import { desafios } from "../../data/desafios";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [desafiosIsOpen, setDesafiosIsOpen] = useState(false);

  const toggleDesafioIsOpen = () => {
    setDesafiosIsOpen(pv => !pv)
  }

  const clickedDesafioItem = (slug: string) => {
    navigate(`/desafio/${slug}`)
    setDesafiosIsOpen(false)
  }

  return (
    <header className="bg-slate-600 w-full flex items-center justify-between px-2 py-1">
      <Logo />
      <button onClick={() => navigate("/")} className="cursor-pointer">Home</button>
      <nav className="relative text-right w-1/6">
        <h3 onClick={toggleDesafioIsOpen} className="cursor-pointer text-center">Desafios</h3>
        {desafiosIsOpen && (
          <ul className="bg-slate-700 py-4 px-3 absolute mt-6 w-80 flex flex-col items-start justify-center gap-4 rounded-b-lg">
            {desafios.map(desafio => (
              <li key={desafio.id} onClick={() => clickedDesafioItem(desafio.slug)} className="cursor-pointer">{desafio.nome}
              </li>
            ))}
          </ul>
        )}

      </nav>
    </header>
  )
}