import { useState } from "react";
import { Container, LinkSidebar, Logo } from "./style";

export function Sidebar() {
  const [activeLink, setActiveLink] = useState(null)
  
  const handleClick = (link: any) => {
    setActiveLink(link)
  }


  return (
    <Container>
      <Logo>
        <h1><span>Dash</span>Board</h1>
      </Logo>

      <LinkSidebar
        to="/" isActive={activeLink === '/'}
        onClick={() => handleClick('/')}
      >Lista de Vídeos
      </LinkSidebar>

      <LinkSidebar to="/view">Detalhe dos Vídeos</LinkSidebar>
    </Container>
  )
}