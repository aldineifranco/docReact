import { Container, Img, Title } from "./style";
import { ProfileProps } from "../../interface/ProfileProps";


export function Profile({ name, url, imageSize }: ProfileProps) {
  return (
    <Container>
      <Img 
        src={url} 
        alt={'foto' + name}
        style={{
          width: imageSize,
          height: imageSize
        }}
      />
      <Title>{name}</Title>
    </Container>
  )
}