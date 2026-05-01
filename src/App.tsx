import { MainContainer } from "./components/MainContainer";
import { LoginBox } from "./components/LoginBox";
import { Logo } from "./components/Logo";
import { Link } from "./components/Link";
import { DoubleButton } from "./components/DoubleButton";

function App() {

  return (
    <>
      
      <MainContainer>
        <Logo />
        <DoubleButton 
          rightText="Entrar"
          leftText="Cadastrar"
        />
        <LoginBox />
        <Link linkText="Esqueci minha senha"/>
      </MainContainer>
    </>
  )
}

export default App
