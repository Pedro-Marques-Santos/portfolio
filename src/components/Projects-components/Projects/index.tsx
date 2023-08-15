import { Project2 } from "../../AllProjects/Project2/Project";
import { Project3 } from "../../AllProjects/Project3/Project";
import { Project } from "../Project";
import { Container, ContentProjects, FraseMotivation, Title } from "./styles";

interface IProjects {
  projectsref: React.RefObject<HTMLHeadingElement>;
}

export function Projects({ projectsref }: IProjects) {
  return (
    <Container>
      <Title ref={projectsref}>Portfolio</Title>
      <FraseMotivation>Meus últimos projetos.</FraseMotivation>
      <ContentProjects>
        <Project />
      </ContentProjects>
      <ContentProjects>
        <Project2 />
      </ContentProjects>
      <ContentProjects>
        <Project3 />
      </ContentProjects>
    </Container>
  );
}
