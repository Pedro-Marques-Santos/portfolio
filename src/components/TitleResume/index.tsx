import { ButtonPDF } from "../ButtonPDF";
import { ButtonContainer, Container, Title } from "./styles";

export function TitleResume() {
  return (
    <Container>
      <Title>Resumo</Title>
      <ButtonContainer>
        <ButtonPDF />
      </ButtonContainer>
    </Container>
  );
}
