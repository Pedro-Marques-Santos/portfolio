import { RefObject } from "react";
import { Img } from "../Img";
import { Information } from "../Information";
import { Container } from "./styles";

interface IAboutMe {
  aboutref: RefObject<HTMLHeadingElement>;
}

export function AboutMe({ aboutref }: IAboutMe) {
  return (
    <Container ref={aboutref}>
      <Img />
      <Information />
    </Container>
  );
}
