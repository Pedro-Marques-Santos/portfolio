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
import { TbBedFilled } from "react-icons/tb";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

export function AboutProject() {
  return (
    <Container>
      <ContentTitle>
        <Title>Windbnb</Title>
        <i>
          <TbBedFilled />
        </i>
      </ContentTitle>
      <InformationProject>
        A car rental website is an online platform that allows users to rent
        cars for personal or business use. The website provides an interface for
        searching, comparing, and reserving cars.
      </InformationProject>
      <MyLinguages>
        <Linguages>React.js</Linguages>
        <Linguages>Css</Linguages>
      </MyLinguages>
      <LinksIcons>
        <LinkIcon
          href={"https://github.com/Pedro-Marques-Santos/Airbnb"}
          target="_blank"
        >
          <TitleLinkIcon>Code</TitleLinkIcon>
          <IconLink>
            <ImGithub />
          </IconLink>
        </LinkIcon>
        <LinkIcon
          href={"https://spectacular-souffle-d93bd8.netlify.app/"}
          target="_blank"
        >
          <TitleLinkIcon>Live demo</TitleLinkIcon>
          <IconLink>
            <AiOutlineDeliveredProcedure />
          </IconLink>
        </LinkIcon>
      </LinksIcons>
    </Container>
  );
}
