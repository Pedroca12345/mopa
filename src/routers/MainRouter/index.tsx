import { BrowserRouter, Route, Routes } from "react-router";
import { LoginBox } from "../../components/LoginBox";
import { Home } from "../../components/Home";

export function MainRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginBox />}
        />

        <Route 
          path="/home"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}