import { Container } from "./styles";

import img from "../../../assets/img/foto_1-removebg-preview.png";

export function Img() {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  );
}
