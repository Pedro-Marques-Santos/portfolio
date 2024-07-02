import { CardProject } from "../../CardProject/CardProject";
import { Container, ContentProjects, FraseMotivation, Title } from "./styles";

import imgpersonality from "../../../assets/projectsimg/personality5.png";
import imgshoppe from "../../../assets/projectsimg/shoppexs 1.png";
import imgsearchmovie from "../../../assets/projectsimg/imgxxx 1.png";

import { GiReceiveMoney as IconShop } from "react-icons/gi";
import { FaUserPen as IconPersonality } from "react-icons/fa6";
import { BiSolidMoviePlay as IconMovie } from "react-icons/bi";

interface IProjects {
  projectsref: React.RefObject<HTMLHeadingElement>;
}

export function Projects({ projectsref }: IProjects) {
  const arraypersonality = ["NextJs", "Styled-Components", "LocalStorage"];
  const arraysearchmovie = ["NextJs", "NodeJs", "MongoDB", "Firebase"];
  const arrayshoppe = ["ReactJs", "Styled-Components", "LocalStorage"];

  return (
    <Container>
      <Title ref={projectsref}>Portfolio</Title>
      <FraseMotivation>Meus últimos projetos.</FraseMotivation>
      <ContentProjects>
        <CardProject
          img={imgpersonality}
          title="Personality"
          information="Personality é mais que um simples site: é uma ferramenta para compreender sua personalidade e oferecer insights valiosos sobre quem você é. Composto por 35 perguntas cuidadosamente elaboradas, esse teste proporciona uma jornada única de autoconhecimento. Ao final, você receberá informações detalhadas sobre sua personalidade, permitindo uma compreensão mais profunda de si mesmo."
          linguages={arraypersonality}
          icon={IconPersonality}
          demo="https://teste-personalidade-mzl5.vercel.app/"
        />
      </ContentProjects>
      {/* <ContentProjects>
        <CardProject
          img={imgsearchmovie}
          title="Search Movie"
          information="O site oferece sugestões de filmes e séries aos usuários, permitindo acesso anônimo ou login para recomendações personalizadas com base em gêneros favoritos. Também inclui uma página de pesquisa para encontrar títulos desejados."
          linguages={arraysearchmovie}
          icon={IconMovie}
          demo="https://search-movie-five.vercel.app/dashboard"
          github={"https://github.com/Pedro-Marques-Santos/search-movie"}
        />
      </ContentProjects> */}
      <ContentProjects>
        <CardProject
          img={imgshoppe}
          title="Shoppe"
          information="Shoppe é uma plataforma de e-commerce. Os usuários têm a capacidade de
        adicionar produtos a um carrinho de compras e ajustar as quantidades dos
        itens específicos conforme desejado. Todos os dados são armazenados de
        forma segura no localstorage do navegador."
          linguages={arrayshoppe}
          icon={IconShop}
          demo="https://deluxe-froyo-8651cb.netlify.app/"
          github="https://github.com/Pedro-Marques-Santos/SHOPPE"
        />
      </ContentProjects>
    </Container>
  );
}
