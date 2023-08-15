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
import { BiSolidMoviePlay } from "react-icons/bi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

export function AboutProject() {
  return (
    <Container>
      <ContentTitle>
        <Title>Search film</Title>
        <i>
          <BiSolidMoviePlay />
        </i>
      </ContentTitle>
      <InformationProject>
        O site sugere filmes e séries aos usuários, permitindo acesso anônimo ou
        login para recomendações personalizadas com base em gêneros favoritos.
        Também inclui uma página de pesquisa para encontrar títulos desejados.
      </InformationProject>
      <MyLinguages>
        <Linguages>Next.js</Linguages>
        <Linguages>Node.js</Linguages>
        <Linguages>MongoDB</Linguages>
        <Linguages>Firebase</Linguages>
      </MyLinguages>
      <LinksIcons>
        <LinkIcon
          href={"https://github.com/Pedro-Marques-Santos/search-movie"}
          target="_blank"
        >
          <TitleLinkIcon>Code</TitleLinkIcon>
          <IconLink>
            <ImGithub />
          </IconLink>
        </LinkIcon>
        <LinkIcon
          href={"https://search-movie-five.vercel.app/dashboard"}
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
