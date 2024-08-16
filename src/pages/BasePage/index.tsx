import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const BasePage = () => {
  return (
    <div className="bg-zinc-800 text-white font-roboto min-h-screen flex flex-col items-center justify-start">
      <Header />
      <Outlet />
    </div>
  )
}