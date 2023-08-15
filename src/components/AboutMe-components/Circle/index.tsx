import { Container, Img1, Img2 } from "./styles";

import gif from "../../../assets/gif/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";

import working from "../../../assets/img/working-emoji.c5325f52b5be329995a5.png";

export function Circle() {
  return (
    <Container>
      <Img1>
        <img src={gif} alt="gif" />
      </Img1>
      <Img2>
        <img src={working} alt="T" />
      </Img2>
    </Container>
  );
}
