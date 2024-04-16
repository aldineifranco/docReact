import { Button, Container, Img, Title } from "./style";
import { ProfileProps } from "../../interface/ProfileProps";


export function Profile({ title, url, link }: ProfileProps) {
  return (
    <Container>
      <Img 
        src={url} 
        alt={'foto' + title}
      />
      <Title>{title}</Title>
      <Button onClick={link}>Assistir</Button>
    </Container>
  )
}

