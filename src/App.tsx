import { MainContainer } from "./components/MainContainer";
import { Logo } from "./components/Logo";
import { MainRouter } from "./routers/MainRouter";
import { UserContextProvider } from "./providers/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <MainContainer>
          <MainRouter>
            <Logo />
          </MainRouter>
        </MainContainer>
      </UserContextProvider>
    </>
  )
}

export default App
