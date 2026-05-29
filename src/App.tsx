import { MainContainer } from "./components/MainContainer";
import { Logo } from "./components/Logo";
import { MainRouter } from "./routers/MainRouter";

function App() {

  return (
    <>
      <MainContainer>
        <MainRouter>
          <Logo />
        </MainRouter>
      </MainContainer>
    </>
  )
}

export default App
