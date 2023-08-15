import { Container } from "./styles";

import about from "../../../assets/img/about-img.62b47e7f183d4b4e9feb.webp";
import { Circle } from "../Circle";

export function Img() {
  return (
    <Container>
      <img src={about} alt="aboutme" />
      <Circle />
    </Container>
  );
}
