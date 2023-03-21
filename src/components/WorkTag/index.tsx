import { Container } from "./styles";

interface IWorkTag {
  font: string;
  frase: string;
}

export function WorkTag({ font, frase }: IWorkTag) {
  return <Container font={font}>{frase} </Container>;
}
