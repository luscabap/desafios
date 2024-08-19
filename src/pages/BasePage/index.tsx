import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const BasePage = () => {
  return (
    <div className="bg-zinc-800 text-white font-roboto min-h-svh flex flex-col items-center justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}