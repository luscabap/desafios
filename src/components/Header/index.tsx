import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-600 w-full flex items-center justify-evenly">
      <h1>DESAFIO PARA DEVS</h1>
      <nav>
        <ul><li onClick={() => navigate("/")} className="cursor-pointer">Home</li></ul>
      </nav>
    </header>
  )
}