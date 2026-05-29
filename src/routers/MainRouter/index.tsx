import { BrowserRouter, Route, Routes } from "react-router";
import { LoginBox } from "../../components/LoginBox";

type MainRouterProps= {
  children: React.ReactNode;
}

export function MainRouter ({ children }: MainRouterProps) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          path="/login"
          element={<LoginBox />}
        />
      </Routes>
    </BrowserRouter>
  )
}