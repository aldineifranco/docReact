import { Link } from "react-router-dom";
import { Container } from "./style";

export function Sidebar() {
  return (
    <Container>
      <Link to="/">lista de Vídeos</Link>
      <Link to="/view">Detalhe dos Vídeos</Link>
    </Container>
  )
}