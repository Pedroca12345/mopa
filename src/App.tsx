import { MainContainer } from "./components/MainContainer";
import { MainRouter } from "./routers/MainRouter";
import { UserContextProvider } from "./providers/UserContextProvider";
import { PartContextProvider } from "./providers/PartContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <PartContextProvider>
          <MainContainer>
            <MainRouter />
          </MainContainer>
        </PartContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
