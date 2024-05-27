import { Link } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";

export function Sidebar() {
  return (
    <Container>
      <Button title="Lista de Vídeos" variant="primary" />
      <Link to="/">lista de Vídeos</Link>
      <Link to="/view">Detalhe dos Vídeos</Link>
    </Container>
  )
}