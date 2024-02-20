import {
  Container,
  Title,
  InformationProject,
  ContentTitle,
  MyLinguages,
  Linguages,
  LinksIcons,
  LinkIcon,
  IconLink,
  TitleLinkIcon,
} from "./styles";

import { ImGithub } from "react-icons/im";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { IconType } from "react-icons";

interface IAboutProject {
  title: string;
  information: string;
  linguages: string[];
  Myicon: IconType;
  demo: string;
  github?: string;
}

export function AboutProject({
  Myicon,
  title,
  information,
  linguages,
  demo,
  github,
}: IAboutProject) {
  return (
    <Container>
      <ContentTitle>
        <Title>{title}</Title>
        <i>
          <Myicon size={20} />
        </i>
      </ContentTitle>
      <InformationProject>{information}</InformationProject>
      <MyLinguages>
        {linguages.map((linguage, index) => {
          return <Linguages key={index}>{linguage}</Linguages>;
        })}
      </MyLinguages>
      <LinksIcons>
        {github && (
          <LinkIcon
            href={"https://github.com/Pedro-Marques-Santos/SHOPPE"}
            target="_blank"
          >
            <TitleLinkIcon>Code</TitleLinkIcon>
            <IconLink>
              <ImGithub />
            </IconLink>
          </LinkIcon>
        )}
        <LinkIcon href={demo} target="_blank">
          <TitleLinkIcon>Live demo</TitleLinkIcon>
          <IconLink>
            <AiOutlineDeliveredProcedure />
          </IconLink>
        </LinkIcon>
      </LinksIcons>
    </Container>
  );
}
