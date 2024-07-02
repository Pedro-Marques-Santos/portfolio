import { Jobs } from "../Jobs";
import { Title } from "../Projects-components/Projects/styles";
import { Container, ContainerJobs, Subtitle } from "./styles";

import imgvone from "../../assets/jobs/agenciavone_logo.jpg";
import imgsardeli from "../../assets/jobs/sardeli.jpg";
import { RefObject } from "react";

interface IMyJobs {
  jobsref: RefObject<HTMLHeadingElement>;
}

export function MyJobs({ jobsref }: IMyJobs) {
  const vone: string[] = [
    "Desenvolvimento Frontend com React, e Backend NodeJs",
    "Utilização de frameworks como Bootstrap, Tailwind, Styledcomponents e Material UI",
    "Desenvolvimento de sites com WordPress",
    "Criação de designs de sites com Figma",
    "Roteamento e validação em Node.js",
    "Utilização das ferramentas Docker e Aapanel para execução de alguns projetos",
    "Ferramentas de gerenciamento de estado: Redux Toolkit, Redux e Zustand",
  ];

  const sardeli: string[] = [
    "Desenvolvimento Frontend com Next.js, Styled-components e Typescript",
    "Criar o design da página",
    "Projetar o site no Figma",
  ];

  return (
    <Container>
      <Title ref={jobsref}>Experiências</Title>
      <Subtitle>Contribuições Profissionais.</Subtitle>
      <ContainerJobs>
        <Jobs
          name1="Desenvolvedor Web"
          name2="Agência V-ONE · Tempo integral"
          date="ago de 2023 - o momento · 12
           meses"
          img={imgvone}
          resposabilities={vone}
        />
        <Jobs
          name1="Desenvolvedor Web"
          name2="Studio Sardeli · Freelance"
          date="abr de 2023 - mai de 2023 · 2 meses"
          img={imgsardeli}
          resposabilities={sardeli}
        />
      </ContainerJobs>
    </Container>
  );
}
