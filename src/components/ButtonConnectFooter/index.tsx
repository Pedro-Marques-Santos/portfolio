import { Container } from "./styles";

export function ButtonConnectFooter() {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/pedromarques01/">
        LinkedIn <span className="material-symbols-outlined">call_made</span>
      </a>
      <a href="https://github.com/Pedro-Marques-Santos?tab=repositories">
        Github <span className="material-symbols-outlined">call_made</span>
      </a>
    </Container>
  );
}
