import { About, Container, Icons } from "./styles";

import hello from "../../../assets/img/hello.png";

import { BsLinkedin, BsGithub } from "react-icons/bs";

export function CardIntroduction() {
  return (
    <Container>
      <h1>Full Stack</h1>
      <h1>
        Developer
        <span>
          <img src={hello} alt="" />
        </span>
      </h1>
      <About>
        Olá, sou Pedro Marques. Um desenvolvedor Full Stack em Reactjs, Nextjs e
        Nodejs moro em Conchal, São Paulo. 📍
      </About>
      <Icons>
        <span>
          <a
            href={"https://www.linkedin.com/in/pedromarques01/"}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="iconIntroduction" />
          </a>
        </span>
        <span>
          <a
            href={"https://github.com/Pedro-Marques-Santos"}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="iconIntroduction" />
          </a>
        </span>
      </Icons>
    </Container>
  );
}
