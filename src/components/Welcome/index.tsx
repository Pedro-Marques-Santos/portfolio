import { ButtonBlack } from "../ButtonBlack";
import { WorkTag } from "../WorkTag";
import { Container, Name, WorkAndLocal } from "./styles";

export function Welcome() {
  return (
    <Container>
      <Name>Olá, meu nome é Pedro</Name>
      <WorkAndLocal>
        <WorkTag font="21px" frase="Desenvolvedor Web" />
        <span>moro no Estado de São Paulo, Brasil</span>
      </WorkAndLocal>
      <ButtonBlack />
    </Container>
  );
}
