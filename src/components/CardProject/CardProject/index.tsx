import { IconType } from "react-icons";
import { AboutProject } from "../AboutProject";
import { Img } from "../Img";
import { Container } from "./styles";

interface ICardProject {
  img: string;
  title: string;
  information: string;
  linguages: string[];
  icon: IconType;
  demo: string;
  github?: string;
}

export function CardProject({
  img,
  title,
  information,
  linguages,
  icon,
  demo,
  github,
}: ICardProject) {
  return (
    <Container>
      <Img img={img} demo={demo} />
      <AboutProject
        demo={demo}
        Myicon={icon}
        title={title}
        information={information}
        linguages={linguages}
        github={github}
      />
    </Container>
  );
}
