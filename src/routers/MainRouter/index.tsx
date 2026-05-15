import { BrowserRouter, Route, Routes } from "react-router";
import { LoginBox } from "../../components/LoginBox";
import { RegisterBox } from "../../components/RegisterBox";

type MainRouterProps= {
  children: React.ReactNode
}

export function MainRouter ({ children }: MainRouterProps) {
  return (
    <BrowserRouter>
      {children}
      <Routes>

        <Route
          path="/"
          element={<LoginBox />}
        />

        <Route 
          path="/register"
          element={<RegisterBox />}
        />

      </Routes>
      
    </BrowserRouter>
  )
}