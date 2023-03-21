import { ButtonConnectFooter } from "../ButtonConnectFooter";
import { Container, Introduction, LetsConnect } from "./styles";

export function Footer() {
  return (
    <Container>
      <Introduction>
        Procurando alguém para se juntar a equipe de desenvolvedor
      </Introduction>
      <LetsConnect>
        Vamos nos conectar
        <span className="material-symbols-outlined">call_made</span>
      </LetsConnect>
      <ButtonConnectFooter />
    </Container>
  );
}
