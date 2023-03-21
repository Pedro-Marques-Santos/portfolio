import { FormationLocationAndDate } from "../FormationLocationAndDate";
import { Container, Description, LinkDescription, Status } from "./styles";

interface IColumnResumeProps {
  formation: string;
  description: string;
  description2?: string;
  typeStyleDescription: string;
}

export function ColumnResume({
  formation,
  description,
  description2,
  typeStyleDescription,
}: IColumnResumeProps) {
  return (
    <Container>
      <Status>{formation}</Status>
      <Description>
        {typeStyleDescription === "formation" && (
          <>
            <FormationLocationAndDate
              formation={"Tecnólogo, Analista de desenvolvimento"}
              date={"jan de 2023 - fev de 2025"}
              course={"Descomplica Faculdade Digital"}
            />
            <FormationLocationAndDate
              formation={"Curso de ReactJs e NextJs, Programação"}
              date={"jan de 2023 - fev de 2023"}
              course={"Udemy"}
              aboutFormation={
                "o curso apresentou os seguintes conteúdos: ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript"
              }
            />
            <FormationLocationAndDate
              formation={"Desenvolvimento Web completo"}
              date={"ago de 2022 - nov de 2022"}
              course={"Udemy"}
              aboutFormation={
                "o curso abordou os seguintes conteúdos: HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, Orientação a objetos com PHP e JAVASCRIPT, MySQL, JQuery, MVC, APIs e IONIC"
              }
            />
          </>
        )}
        {typeStyleDescription === "padrao" && <div>{description}</div>}
        {typeStyleDescription === "padrao" && <div>{description2}</div>}
        {typeStyleDescription === "link" && (
          <LinkDescription>{description}</LinkDescription>
        )}
        {typeStyleDescription === "link" && (
          <LinkDescription href="https://www.linkedin.com/in/pedromarques01/">
            {description2}
          </LinkDescription>
        )}
      </Description>
    </Container>
  );
}
