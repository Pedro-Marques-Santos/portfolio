/* eslint-disable react/jsx-no-target-blank */
import { Container, ContentContainer, Information, MyIcons } from "./styles";

import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <ContentContainer>
      <Container>
        <Information>
          seja bem vindo ao meu portfolio, estou a sua disposição para uma
          conversa sobre suas necessidades de desenvolvimento web.
        </Information>
        <MyIcons>
          <a
            href={"https://www.linkedin.com/in/pedromarques01/"}
            target="_blank"
          >
            <GrLinkedin />
          </a>
          <a href={"https://github.com/Pedro-Marques-Santos"} target="_blank">
            <BsGithub />
          </a>
        </MyIcons>
      </Container>
    </ContentContainer>
  );
}
