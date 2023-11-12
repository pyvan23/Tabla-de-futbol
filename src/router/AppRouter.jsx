import { Route, Routes } from "react-router-dom"
import { TablaScreen } from "../pages/TablaScreen"
import { LoginPage } from "../auth/pages/LoginPage"
import { AdminScreen } from "../pages/AdminScreen"





export const AppRouter = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Tabla" element={<TablaScreen />} />
          <Route path="/Admin" element={<AdminScreen />} />
        </Routes>
    </>
  )
}
