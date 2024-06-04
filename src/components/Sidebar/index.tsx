import { Link } from "react-router-dom";
import { Container, LinkSidebar } from "./style";
import { Button } from "../Button";

export function Sidebar() {
  return (
    <Container>
      <LinkSidebar to="/">Lista de Vídeos</LinkSidebar>
      <LinkSidebar to="/view">Detalhe dos Vídeos</LinkSidebar>
    </Container>
  )
}