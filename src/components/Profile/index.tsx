import { Container, Img, Title } from "./style";


interface ProfileProps {
  name: string;
  imageUrl: string;
  imageSize: number
}


export function Profile({ name, imageUrl, imageSize }: ProfileProps) {
  return (
    <Container>
      <Img 
        src={imageUrl} 
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