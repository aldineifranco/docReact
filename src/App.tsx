import { Profile } from "./components/Profile"
import { Container, Content } from "./style"

function App() {
  return (
    <Container>
      <Content>
        <Profile name='Aldinei Souza Franco' imageUrl='https://avatars.githubusercontent.com/u/93042673?v=4' imageSize={90} />
        <Profile name='Aldinei Souza Franco' imageUrl='https://avatars.githubusercontent.com/u/93042673?v=4' imageSize={90} />
      </Content>
    </Container>
  )
}

export default App
