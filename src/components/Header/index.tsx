import { RefObject, useState } from "react";
import {
  Container,
  Home,
  Item,
  Menu,
  MenuBar,
  Pages,
  PagesBar,
  ProgessBar,
  Tag,
} from "./styles";

interface IHeaderProps {
  refprojetos: RefObject<HTMLDivElement>;
  refresumo: RefObject<HTMLDivElement>;
}

export function Header({ refprojetos, refresumo }: IHeaderProps) {
  const [progressBar, setProgessBar] = useState(false);

  function handleProjetos() {
    window.scrollTo({
      top: refprojetos.current?.offsetTop,
    });
  }

  function handleResumo() {
    window.scrollTo({
      top: refresumo.current?.offsetTop,
    });
  }

  return (
    <Home>
      <Container>
        <Menu>
          <Tag>Desenvolvedor</Tag>
          <ProgessBar onClick={() => setProgessBar(!progressBar)}>
            <i className="material-symbols-outlined">density_small</i>
          </ProgessBar>
          <Pages>
            <Item onClick={handleProjetos}>Projetos</Item>
            <Item onClick={handleResumo}>Resumo</Item>
          </Pages>
        </Menu>
        <MenuBar stateProgessBar={progressBar}>
          <PagesBar>
            <Item onClick={handleProjetos}>Projetos</Item>
            <Item onClick={handleResumo}>Resumo</Item>
          </PagesBar>
        </MenuBar>
      </Container>
    </Home>
  );
}
