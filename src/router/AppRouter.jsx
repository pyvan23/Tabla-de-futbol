import { Route, Routes } from "react-router-dom"
import { Tabla } from "../pages/Tabla"
import { LoginPage } from "../auth/pages/LoginPage"
import { Armado } from "../pages/armado"


export const AppRouter = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Armado" element={<Armado />} />
          <Route path="/Tabla" element={<Tabla />} />
        </Routes>
    </>
  )
}
