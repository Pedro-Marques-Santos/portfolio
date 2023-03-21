import { ColumnResume } from "../ColumnResume";
import { Container } from "./styles";

export function TableResume() {
  return (
    <Container>
      <ColumnResume
        formation={"Formações"}
        description={""}
        typeStyleDescription={"formation"}
      />
      <ColumnResume
        formation={"Skills"}
        description={"ReactJs, NodeJs, Javascript, Php, Css, Bootstrap"}
        typeStyleDescription={"padrao"}
      />
      <ColumnResume
        formation={"Ferramentas"}
        description={"Figma, Github"}
        typeStyleDescription={"padrao"}
      />
      <ColumnResume
        formation={"Contatos"}
        description={"pedromarquesnoot@outlook.com"}
        description2={"https://www.linkedin.com/in/pedromarques01/"}
        typeStyleDescription={"link"}
      />
    </Container>
  );
}
