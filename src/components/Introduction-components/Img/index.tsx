import { Container } from "./styles";

import img from "../../../assets/img/WhatsApp_Image_2023-08-18_at_09.45_1-removebg-preview.png";

export function Img() {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  );
}
