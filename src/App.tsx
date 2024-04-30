
import { AppRoutes } from "./routes/mainRoutes"
import { Container, Main } from "./style"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main>
        <AppRoutes />
      </Main>
    </Container>
    )
}

export default App
