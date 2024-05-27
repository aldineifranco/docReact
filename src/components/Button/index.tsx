import { ComponentProps } from "react"
import { Container } from './style';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  variant: "primary" | "secondary"
}

export function Button({ title, variant = "primary"}: ButtonProps) {
  return (
    <>
      <Container>
        {title}
      </Container>
    </>
  )
}