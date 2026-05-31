import { MainContainer } from "./components/MainContainer";
import { MainRouter } from "./routers/MainRouter";
import { UserContextProvider } from "./providers/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <MainContainer>
          <MainRouter />
        </MainContainer>
      </UserContextProvider>
    </>
  )
}

export default App
