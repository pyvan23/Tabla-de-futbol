import { Route, Routes } from "react-router-dom"
import { TablaScreen } from "../pages/TablaScreen"
import { AdminScreen } from "../pages/AdminScreen"





export const AppRouter = () => {
  return (
    <>
     <Routes>
       
          <Route path="/" element={<TablaScreen />} />
          <Route path="/Admin" element={<AdminScreen />} />
        </Routes>
    </>
  )
}
