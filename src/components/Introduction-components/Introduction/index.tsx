import { CardIntroduction } from "../CardIntroduction";
import { Img } from "../Img";
import { Container } from "./styles";

export function Introduction() {
  return (
    <Container>
      <CardIntroduction />
      <Img />
    </Container>
  );
}
