import { ImgAboutMe } from "../ImgAboutMe";
import { WorkTag } from "../WorkTag";
import { Container, Name, Resume, TextAboutMe, WorkAndLocal } from "./styles";

export function AboutMe() {
  return (
    <Container>
      <TextAboutMe>
        <Name>
          Olá, meu nome é Pedro.{" "}
          <WorkAndLocal>
            <WorkTag font="21px" frase="Desenvolvedor Web" />
            <span>moro no Estado de São Paulo, Brasil</span>
          </WorkAndLocal>
        </Name>
        <Resume>
          Sou autodidata na área de programação e atualmente busco me
          aperfeiçoar no ecossistema web. Atualmente, procuro ganhar experiência
          através de projetos pessoais, por meio de desafios pessoais aprendi a
          desenvolver através das seguintes linguagens e bibliotecas Reactjs,
          Nodejs, Javascript, css e Php.
        </Resume>
      </TextAboutMe>
      <ImgAboutMe />
    </Container>
  );
}
