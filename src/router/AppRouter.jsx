import { Route, Routes } from "react-router-dom"
import { Tabla } from "../pages/Tabla"
import { LoginPage } from "../auth/pages/LoginPage"





export const AppRouter = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Tabla" element={<Tabla />} />
        </Routes>
    </>
  )
}
