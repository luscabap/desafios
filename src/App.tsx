import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { BasePage } from './pages/BasePage'
import { HomePage } from './pages/HomePage'
import { DesafioPage } from './pages/DesafioPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />}/>
          <Route path='/desafio/:slugDesafio' element={<DesafioPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
