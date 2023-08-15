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
import { GiReceiveMoney } from "react-icons/gi";

export function AboutProject() {
  return (
    <Container>
      <ContentTitle>
        <Title>Shoppe</Title>
        <i>
          <GiReceiveMoney />
        </i>
      </ContentTitle>
      <InformationProject>
        Shoppe é uma plataforma de e-commerce. Os usuários têm a capacidade de
        adicionar produtos a um carrinho de compras e ajustar as quantidades dos
        itens específicos conforme desejado. Todos os dados são armazenados de
        forma segura no localstorage do navegador.
      </InformationProject>
      <MyLinguages>
        <Linguages>React.js</Linguages>
        <Linguages>Css</Linguages>
        <Linguages>Localstorage</Linguages>
      </MyLinguages>
      <LinksIcons>
        <LinkIcon
          href={"https://github.com/Pedro-Marques-Santos/SHOPPE"}
          target="_blank"
        >
          <TitleLinkIcon>Code</TitleLinkIcon>
          <IconLink>
            <ImGithub />
          </IconLink>
        </LinkIcon>
        <LinkIcon
          href={"https://deluxe-froyo-8651cb.netlify.app/"}
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
