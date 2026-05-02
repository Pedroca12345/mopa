import { MainContainer } from "./components/MainContainer";
import { Logo } from "./components/Logo";
import { DoubleButton } from "./components/DoubleButton";
import { MainRouter } from "./routers/MainRouter";

function App() {

  return (
    <>


      <MainContainer>
        <MainRouter>
          <Logo />
          <DoubleButton
            rightText="Cadastrar"
            leftText="Entrar"
          />
        </MainRouter>
      </MainContainer>

    </>
  )
}

export default App
